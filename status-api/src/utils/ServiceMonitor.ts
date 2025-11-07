import fetch from 'node-fetch';
import { Service } from '../models/Service';

export class ServiceMonitor {
  static async pingService(url: string, timeout: number = 5000): Promise<number> {
    const start = Date.now();
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    try {
      await fetch(url, { signal: controller.signal });
      clearTimeout(timeoutId);
      return Date.now() - start;
    } catch (error) {
      clearTimeout(timeoutId);
      throw error;
    }
  }

  static calculateUptime(statusHistory: any[]): string {
    if (!statusHistory || statusHistory.length === 0) return '100.00';
    
    // Look at last 24 hours of status
    const last24Hours = new Date(Date.now() - 24 * 60 * 60 * 1000);
    const recentHistory = statusHistory.filter(
      entry => new Date(entry.timestamp) >= last24Hours
    );

    if (recentHistory.length === 0) return '100.00';

    const operationalCount = recentHistory.filter(
      entry => entry.status === 'operational'
    ).length;

    const uptime = (operationalCount / recentHistory.length) * 100;
    return uptime.toFixed(2);
  }

  static async updateServiceStatus() {
    const services = await Service.find();
    
    for (const service of services) {
      try {
        const latency = await this.pingService(service.endpoint);
        const currentTime = new Date();
        
        // Create new status entry
        const statusEntry = {
          status: 'operational',
          timestamp: currentTime,
          metrics: {
            latency,
            availability: 100,
            errorRate: 0
          }
        };

        // Update service with new status and calculated uptime
        await Service.findByIdAndUpdate(service._id, {
          $set: {
            status: 'operational',
            lastChecked: currentTime,
            metrics: {
              latency,
              availability: 100,
              errorRate: 0
            }
          },
          $push: {
            statusHistory: {
              $each: [statusEntry],
              $position: 0,
              $slice: 1440 // Keep last 24 hours (1 check per minute)
            }
          }
        });

        console.log(`✅ ${service.name}: ${latency}ms`);
      } catch (error) {
        const currentTime = new Date();
        
        // Create failure status entry
        const statusEntry = {
          status: 'outage',
          timestamp: currentTime,
          metrics: {
            latency: -1,
            availability: 0,
            errorRate: 100
          }
        };

        await Service.findByIdAndUpdate(service._id, {
          $set: {
            status: 'outage',
            lastChecked: currentTime,
            metrics: {
              latency: -1,
              availability: 0,
              errorRate: 100
            }
          },
          $push: {
            statusHistory: {
              $each: [statusEntry],
              $position: 0,
              $slice: 1440 // Keep last 24 hours
            }
          }
        });

        console.log(`❌ ${service.name}: Failed`);
      }

      // Calculate and update uptime after status change
      const updatedService = await Service.findById(service._id);
      if (updatedService) {
        const uptime = this.calculateUptime(updatedService.statusHistory);
        await Service.findByIdAndUpdate(service._id, {
          uptime: `${uptime}%`
        });
      }
    }
  }

  static startMonitoring(interval: number = 60000) {
    console.log('🔄 Starting service monitoring');
    this.updateServiceStatus();
    return setInterval(() => this.updateServiceStatus(), interval);
  }
}