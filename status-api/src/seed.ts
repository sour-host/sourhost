import mongoose from 'mongoose';
import { Service } from './models/Service';
import dotenv from 'dotenv';

dotenv.config();

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/status-api');

    await Service.deleteMany({});

    const services = [
      {
        name: 'Web Hosting',
        status: 'operational',
        uptime: '99.99%',
        metrics: {
          latency: 45,
          availability: 99.99,
          errorRate: 0.01
        }
      },
      {
        name: 'DNS Services',
        status: 'operational',
        uptime: '100%',
        metrics: {
          latency: 12,
          availability: 100,
          errorRate: 0
        }
      },
      {
        name: 'Network Infrastructure',
        status: 'operational',
        uptime: '99.95%',
        metrics: {
          latency: 8,
          availability: 99.95,
          errorRate: 0.05
        }
      }
    ];

    await Service.insertMany(services);
    console.log('Database seeded successfully');
    process.exit(0);
  } catch (error) {
    console.error('Seeding error:', error);
    process.exit(1);
  }
};

seedData();