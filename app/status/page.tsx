'use client';
import { useState, useEffect } from 'react';
import { API_URLS, SERVICE_IDS } from '@/lib/config';

type ServiceStatus = {
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
};

type Incident = {
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
};

export default function Status() {
  const [services, setServices] = useState<ServiceStatus[]>([]);
  const [incidents, setIncidents] = useState<Incident[]>([]);
  const [metrics, setMetrics] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());

  const fetchData = async () => {
    try {
      const [servicesRes, incidentsRes, metricsRes] = await Promise.all([
        fetch(API_URLS.status.services),
        fetch(API_URLS.status.incidents),
        fetch(API_URLS.status.metrics)
      ]);

      if (!servicesRes.ok || !incidentsRes.ok || !metricsRes.ok) {
        throw new Error('One or more API endpoints failed');
      }

      const [servicesData, incidentsData, metricsData] = await Promise.all([
        servicesRes.json(),
        incidentsRes.json(),
        metricsRes.json()
      ]);

      setServices(servicesData);
      setIncidents(incidentsData);
      setMetrics(metricsData);
      setLastUpdated(new Date());
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch status data');
      console.error('Status fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    // Refresh every 30 seconds
    const interval = setInterval(fetchData, 30000);
    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status: ServiceStatus['status']) => {
    const colors = {
      operational: 'bg-emerald-900/50 text-emerald-400 border-emerald-800',
      degraded: 'bg-yellow-900/50 text-yellow-400 border-yellow-800',
      outage: 'bg-red-900/50 text-red-400 border-red-800',
      maintenance: 'bg-blue-900/50 text-blue-400 border-blue-800'
    };
    return colors[status] || colors.degraded;
  };

  const getSeverityColor = (severity: Incident['severity']) => {
    const colors = {
      critical: 'bg-red-900/50 text-red-400 border-red-800',
      major: 'bg-orange-900/50 text-orange-400 border-orange-800',
      minor: 'bg-yellow-900/50 text-yellow-400 border-yellow-800'
    };
    return colors[severity] || colors.minor;
  };

  if (loading) return (
    <div className="p-6 min-h-screen bg-[#0a0a0a] text-white">
      <div className="animate-pulse text-zinc-400">Loading status...</div>
    </div>
  );

  if (error) return (
    <div className="p-6 min-h-screen bg-[#0a0a0a] text-white">
      <div className="text-red-400">Error: {error}</div>
    </div>
  );

  return (
    <div className="p-6 min-h-screen bg-[#0a0a0a] text-white">
      {/* Overall Status */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-4">System Status</h1>
        <div className="p-6 rounded-lg border border-zinc-800 bg-zinc-900/50">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <div className={`w-3 h-3 rounded-full ${
                services.every(s => s.status === 'operational')
                  ? 'bg-emerald-400'
                  : 'bg-yellow-400'
              }`}></div>
              <span className="text-lg font-medium">
                {services.every(s => s.status === 'operational')
                  ? 'All Systems Operational'
                  : 'Partial System Outage'}
              </span>
            </div>
            <span className="text-zinc-400">Updated: {new Date().toLocaleTimeString()}</span>
          </div>
        </div>
      </div>

      {/* Services Status with Metrics */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Services</h2>
          <span className="text-sm text-zinc-400">
            Last updated: {lastUpdated.toLocaleTimeString()}
          </span>
        </div>
        <div className="space-y-4">
          {services.map(service => (
            <div key={service.id} 
                 className="p-4 rounded-lg border border-zinc-800 bg-zinc-900/50">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-4">
                  <span className="font-medium">{service.name}</span>
                  <span className={`px-3 py-1 rounded-full text-sm border ${getStatusColor(service.status)}`}>
                    {service.status}
                  </span>
                </div>
                <span className="text-zinc-400">Uptime: {service.uptime}</span>
              </div>
              
              {/* Metrics Display */}
              <div className="grid grid-cols-3 gap-4 mt-3 pt-3 border-t border-zinc-800">
                <div className="text-center">
                  <p className="text-sm text-zinc-400">Latency</p>
                  <p className="text-lg font-medium">
                    {service.metrics.latency}ms
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-zinc-400">Availability</p>
                  <p className="text-lg font-medium">
                    {service.metrics.availability}%
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-zinc-400">Error Rate</p>
                  <p className="text-lg font-medium">
                    {service.metrics.errorRate}%
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Incidents */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Recent Incidents</h2>
        <div className="space-y-6">
          {incidents.map(incident => (
            <div key={incident.id} 
                 className="p-6 rounded-lg border border-zinc-800 bg-zinc-900/50">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-medium mb-1">{incident.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm border ${
                    incident.status === 'resolved' 
                      ? 'bg-emerald-900/50 text-emerald-400 border-emerald-800'
                      : 'bg-yellow-900/50 text-yellow-400 border-yellow-800'
                  }`}>
                    {incident.status}
                  </span>
                </div>
                <span className="text-zinc-400">
                  {new Date(incident.createdAt).toLocaleDateString()}
                </span>
              </div>
              <div className="space-y-3">
                {incident.updates.map((update, idx) => (
                  <div key={idx} className="text-sm">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-zinc-400">
                        {new Date(update.timestamp).toLocaleTimeString()}
                      </span>
                      <span className="text-zinc-300">{update.status}</span>
                    </div>
                    <p className="text-zinc-400">{update.message}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}