import mongoose from 'mongoose';

interface IStatusHistory {
  status: 'operational' | 'degraded' | 'outage' | 'maintenance';
  timestamp: Date;
  message?: string;
  metrics: {
    latency: number;
    availability: number;
    errorRate: number;
  };
}

interface IService extends mongoose.Document {
  name: string;
  endpoint: string;
  description?: string;
  status: 'operational' | 'degraded' | 'outage' | 'maintenance';
  uptime: string;
  metrics: {
    latency: number;
    availability: number;
    errorRate: number;
  };
  statusHistory: IStatusHistory[];
  lastChecked: Date;
  monitoringConfig?: {
    timeout: number;
    interval: number;
    expectedStatus: number;
    retryAttempts: number;
  };
  recordStatus: (
    status: 'operational' | 'degraded' | 'outage' | 'maintenance',
    metrics: IService['metrics'],
    message?: string
  ) => Promise<void>;
  calculateUptime: () => string;
}

const ServiceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  endpoint: { type: String, required: true },
  description: String,
  status: {
    type: String,
    enum: ['operational', 'degraded', 'outage', 'maintenance'],
    default: 'operational'
  },
  uptime: { type: String, default: '100.00%' },
  metrics: {
    latency: { type: Number, default: 0 },
    availability: { type: Number, default: 100 },
    errorRate: { type: Number, default: 0 }
  },
  statusHistory: [{
    status: {
      type: String,
      enum: ['operational', 'degraded', 'outage', 'maintenance'],
      required: true
    },
    timestamp: { type: Date, default: Date.now },
    message: String,
    metrics: {
      latency: Number,
      availability: Number,
      errorRate: Number
    }
  }],
  lastChecked: { type: Date, default: Date.now },
  monitoringConfig: {
    timeout: { type: Number, default: 5000 },
    interval: { type: Number, default: 60000 },
    expectedStatus: { type: Number, default: 200 },
    retryAttempts: { type: Number, default: 3 }
  }
});

// Add method to record status
ServiceSchema.methods.recordStatus = async function(
  status: IService['status'],
  metrics: IService['metrics'],
  message?: string
): Promise<void> {
  this.status = status;
  this.metrics = metrics;
  this.lastChecked = new Date();

  this.statusHistory.unshift({
    status,
    timestamp: new Date(),
    message,
    metrics
  });

  // Keep last 1440 entries (24 hours of minute-by-minute checks)
  if (this.statusHistory.length > 1440) {
    this.statusHistory = this.statusHistory.slice(0, 1440);
  }

  await this.save();
};

// Add method to calculate uptime
ServiceSchema.methods.calculateUptime = function(): string {
  const last24Hours = new Date(Date.now() - 24 * 60 * 60 * 1000);
  const recentHistory = this.statusHistory.filter(
    (entry: IStatusHistory) => entry.timestamp >= last24Hours
  );

  if (recentHistory.length === 0) return '100.00%';

  const operationalCount = recentHistory.filter(
    (entry: IStatusHistory) => entry.status === 'operational'
  ).length;

  const uptime = (operationalCount / recentHistory.length) * 100;
  return `${uptime.toFixed(2)}%`;
};

export const Service = mongoose.model<IService>('Service', ServiceSchema);
export type { IService, IStatusHistory };