import type { SensorData } from '../interfaces/sensor-data.js';
import type { SensorRepository } from '../interfaces/sensor-repository.js';
import SensorDataModel from '../models/SensorData.js';

export class SensorRepositoryImpl implements SensorRepository {
  async findAll(limit = 100): Promise<SensorData[]> {
    return await SensorDataModel.find().lean().limit(limit);
  }

  async findLatest(): Promise<SensorData | null> {
    return await SensorDataModel.findOne().sort({ createdAt: -1 }).lean();
  }
}
