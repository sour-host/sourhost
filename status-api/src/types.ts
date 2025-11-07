export interface ServiceStatus {
  id: string;
  name: string;
  status: 'operational' | 'degraded' | 'outage' | 'maintenance';
  uptime: string;
  metrics: {
    latency: number;
    availability: number;
    errorRate: number;
  };
  lastUpdated: string;
}

export interface Incident {
  id: string;
  title: string;
  status: 'investigating' | 'identified' | 'monitoring' | 'resolved';
  severity: 'critical' | 'major' | 'minor';
  serviceId: string;
  createdAt: string;
  updatedAt: string;
  updates: {
    id: string;
    timestamp: string;
    status: string;
    message: string;
  }[];
}