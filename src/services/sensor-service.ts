import type { SensorData } from '../interfaces/sensor-data.js';
import type { SensorRepository } from '../interfaces/sensor-repository.js';
import type { SensorService } from '../interfaces/sensor-service.js';

export class SensorServiceImpl implements SensorService {
  constructor(private sensorRepository: SensorRepository) {}

  async getLatestData(): Promise<SensorData | null> {
    const data = await this.sensorRepository.findLatest();

    if (data == null) {
      throw new Error('No sensor data in database');
    }

    return data;
  }

  async getHistoricalData(): Promise<SensorData[]> {
    const data = await this.sensorRepository.findAll();
    return data;
  }
}
