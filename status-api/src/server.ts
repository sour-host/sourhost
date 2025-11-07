import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { Service } from './models/Service';
import { Incident } from './models/Incident';
import healthRoutes from './routes/health';
import { ServiceMonitor } from './utils/ServiceMonitor';

// Enable better error logging
process.on('uncaughtException', (error) => {
    console.error('🔥 Uncaught Exception:', error);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('🔥 Unhandled Rejection at:', promise, 'reason:', reason);
});

dotenv.config();

console.log('📝 Starting server initialization...');

const app = express();

// Initialize MongoDB connection status
let isConnectedToDB = false;

// Enhanced CORS configuration
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:3001'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Improved MongoDB connection with retry logic
const connectDB = async (retries = 5) => {
  while (retries > 0) {
    try {
      if (!process.env.MONGODB_URI) {
        throw new Error('MONGODB_URI is not defined in environment variables');
      }

      await mongoose.connect(process.env.MONGODB_URI);
      isConnectedToDB = true;
      console.log('📦 Connected to MongoDB successfully');
      return true;
    } catch (err) {
      console.error(`❌ MongoDB connection attempt failed. ${retries} retries left.`);
      console.error(err);
      retries -= 1;
      // Wait 5 seconds before retrying
      await new Promise(resolve => setTimeout(resolve, 5000));
    }
  }
  return false;
};

// Health check endpoint with DB status
app.get('/health', (req, res) => {
  res.json({ 
    status: isConnectedToDB ? 'healthy' : 'degraded',
    database: isConnectedToDB ? 'connected' : 'disconnected',
    timestamp: new Date().toISOString()
  });
});

// Middleware to check DB connection
const checkDBConnection = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  if (!isConnectedToDB) {
    return res.status(503).json({ error: 'Database connection not available' });
  }
  next();
};

// Apply DB check middleware to all API routes
app.use('/api/v1', checkDBConnection);
app.use('/api/health', healthRoutes);

// API Routes
app.get('/api/v1/services', async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch services' });
  }
});

app.get('/api/v1/incidents', async (req, res) => {
  try {
    const incidents = await Incident.find()
      .sort({ createdAt: -1 })
      .limit(10);
    res.json(incidents);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch incidents' });
  }
});

app.get('/api/v1/metrics', async (req, res) => {
  try {
    const services = await Service.find();
    interface ServiceMetrics {
      [key: string]: any;
    }

    interface ServiceWithMetrics {
      id: string;
      metrics: ServiceMetrics;
    }

    const servicesWithMetrics: ServiceWithMetrics[] = services as ServiceWithMetrics[];

    const metrics: { [key: string]: ServiceMetrics } = servicesWithMetrics.reduce(
      (acc: { [key: string]: ServiceMetrics }, service: ServiceWithMetrics) => ({
        ...acc,
        [service.id]: service.metrics
      }),
      {}
    );
    res.json(metrics);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch metrics' });
  }
});

// Admin routes for updating status
app.post('/api/v1/services/:id/status', async (req, res) => {
  try {
    const { status } = req.body;
    const service = await Service.findByIdAndUpdate(
      req.params.id,
      { 
        status,
        lastUpdated: new Date()
      },
      { new: true }
    );
    res.json(service);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update service status' });
  }
});

app.post('/api/v1/incidents', async (req, res) => {
  try {
    const incident = new Incident(req.body);
    await incident.save();
    res.status(201).json(incident);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create incident' });
  }
});

const PORT = process.env.PORT || 3001;

// Start server only after attempting database connection
const startServer = async () => {
  await connectDB();
  
  // Start monitoring after DB connection
  ServiceMonitor.startMonitoring();
  
  app.listen(PORT, () => {
    console.log(`
====================================
🚀 Server running on port ${PORT}
📡 Service monitoring active
🔄 Check interval: 60 seconds
====================================
    `);
  });
};

// Start the server
startServer().catch((err) => {
  console.error('❌ Failed to start server:', err);
  process.exit(1);
});