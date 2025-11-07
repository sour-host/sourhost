import { NextResponse } from 'next/server';

export async function GET() {
  const services = [
    {
      id: '1',
      name: 'Web Hosting',
      status: 'operational',
      uptime: '99.99%',
      lastIncident: '2023-12-01'
    },
    {
      id: '2',
      name: 'DNS Services',
      status: 'operational',
      uptime: '100%',
      lastIncident: null
    },
    {
      id: '3',
      name: 'Network Infrastructure',
      status: 'operational',
      uptime: '99.95%',
      lastIncident: '2023-11-15'
    },
    {
      id: '4',
      name: 'Email Services',
      status: 'operational',
      uptime: '99.98%',
      lastIncident: '2023-11-20'
    }
  ];

  const incidents = [
    {
      id: '1',
      title: 'Network Latency in US-East Region',
      status: 'resolved',
      serviceId: '3',
      createdAt: '2023-11-15T08:00:00Z',
      updatedAt: '2023-11-15T10:30:00Z',
      updates: [
        {
          timestamp: '2023-11-15T08:00:00Z',
          status: 'investigating',
          message: 'Investigating increased latency in US-East region'
        },
        {
          timestamp: '2023-11-15T09:15:00Z',
          status: 'identified',
          message: 'Issue identified as network congestion at primary datacenter'
        },
        {
          timestamp: '2023-11-15T10:30:00Z',
          status: 'resolved',
          message: 'Network routes optimized and latency returned to normal levels'
        }
      ]
    }
  ];

  return NextResponse.json({ services, incidents });
}