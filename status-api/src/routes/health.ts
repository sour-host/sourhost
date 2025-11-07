import express from 'express';
import { hostname } from 'os';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    status: 'operational',
    timestamp: new Date().toISOString(),
    host: hostname(),
    memory: {
      free: process.memoryUsage().heapUsed,
      total: process.memoryUsage().heapTotal
    }
  });
});

export default router;