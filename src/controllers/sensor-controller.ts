import type { Request, Response } from 'express';

import type { SensorService } from '../interfaces/sensor-service.js';

export class SensorController {
  constructor(private sensorService: SensorService) {}

  async getHistoricalData(req: Request, res: Response) {
    const data = await this.sensorService.getHistoricalData();

    return res.status(200).json({
      status: 'success',
      data,
    });
  }

  async getLatestData(req: Request, res: Response) {
    const data = await this.sensorService.getLatestData();

    return res.status(200).json({
      status: 'success',
      data,
    });
  }
}
