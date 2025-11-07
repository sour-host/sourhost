import { Service, IService } from '../models/Service';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const services = [
  {
    name: 'Web Hosting',
    description: 'Main web hosting infrastructure',
    endpoint: 'https://sour.host', 
    monitoringConfig: {
      timeout: 5000,
      interval: 60000,
      expectedStatus: 200,
      retryAttempts: 3,
      headers: { 
        'Accept': 'application/json'
      }
    }
  },
  {
    name: 'DNS Services',
    description: 'DNS resolution and management',
    endpoint: 'https://dns.sourhost.com/health',
    monitoringConfig: {
      timeout: 3000,
      interval: 30000,
      expectedStatus: 200,
      retryAttempts: 2
    }
  },
  {
    name: 'Email Services',
    description: 'Email hosting and routing',
    endpoint: 'https://mail.sourhost.com/health',
    monitoringConfig: {
      timeout: 5000,
      interval: 60000,
      expectedStatus: 200,
      retryAttempts: 3
    }
  }
];

async function seedServices() {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log('Connected to MongoDB');

    await Service.deleteMany({});
    console.log('Cleared existing services');

    for (const service of services) {
      const newService = new Service({
        ...service,
        status: 'operational',
        uptime: '100.00%',
        metrics: {
          latency: 0,
          availability: 100,
          errorRate: 0
        },
        statusHistory: [{
          status: 'operational',
          timestamp: new Date(),
          message: 'Initial setup',
          metrics: {
            latency: 0,
            availability: 100,
            errorRate: 0
          }
        }],
        lastChecked: new Date()
      });

      await newService.save();
      console.log(`Created service: ${service.name}`);
    }

    console.log('Services seeded successfully');
    process.exit(0);
  } catch (error) {
    console.error('Seeding error:', error);
    process.exit(1);
  } finally {
    await mongoose.connection.close();
  }
}

seedServices();