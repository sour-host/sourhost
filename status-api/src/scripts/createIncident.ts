import mongoose from 'mongoose';
import { Service, IService } from '../models/Service';
import dotenv from 'dotenv';

dotenv.config();

interface IncidentInput {
  serviceName: string;
  status: 'degraded' | 'outage' | 'maintenance';
  message: string;
  metrics?: {
    latency?: number;
    availability?: number;
    errorRate?: number;
  };
}

async function createIncident(input: IncidentInput) {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log('📡 Connected to MongoDB');

    const service = await Service.findOne({ name: input.serviceName }) as IService;
    
    if (!service) {
      throw new Error(`Service "${input.serviceName}" not found`);
    }

    // Set default metrics based on status
    const metrics = {
      latency: input.metrics?.latency ?? (input.status === 'degraded' ? 1000 : -1),
      availability: input.metrics?.availability ?? (
        input.status === 'degraded' ? 50 :
        input.status === 'maintenance' ? 0 : 0
      ),
      errorRate: input.metrics?.errorRate ?? (
        input.status === 'degraded' ? 50 :
        input.status === 'maintenance' ? 100 : 100
      )
    };

    await service.recordStatus(input.status, metrics, input.message);

    console.log(`✅ Incident recorded for ${input.serviceName}`);
    console.log(`Status: ${input.status}`);
    console.log(`Message: ${input.message}`);
    console.log(`Current uptime: ${service.calculateUptime()}`);

  } catch (error) {
    console.error('❌ Error creating incident:', error);
  } finally {
    await mongoose.connection.close();
    console.log('📡 MongoDB connection closed');
  }
}

// Example usage
if (require.main === module) {
  // This allows the script to be run directly or imported as a module
  const exampleIncident: IncidentInput = {
    serviceName: 'Web Hosting',
    status: 'degraded',
    message: 'High latency detected in US-East region',
    metrics: {
      latency: 1500,
      availability: 85,
      errorRate: 15
    }
  };

  createIncident(exampleIncident).then(() => process.exit(0));
}

export { createIncident };
export type { IncidentInput };
