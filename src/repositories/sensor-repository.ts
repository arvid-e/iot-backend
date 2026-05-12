import type { SensorData } from '../interfaces/sensor-data.js';
import type { SensorRepository } from '../interfaces/sensor-repository.js';
import SensorDataModel from '../models/SensorData.js';

export class SensorRepositoryImpl implements SensorRepository {
  async getAll(limit = 100): Promise<SensorData[]> {
    return await SensorDataModel.find().lean().limit(limit);
  }

  async getLatest(): Promise<SensorData | null> {
    return await SensorDataModel.findOne().sort({ createdAt: -1 }).lean();
  }
}
