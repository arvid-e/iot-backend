import type { SensorData } from '../interfaces/sensor-data.js';
import type { SensorRepository } from '../interfaces/sensor-repository.js';
import SensorDataModel from '../models/SensorData.js';

export class SensorRepositoryImpl implements SensorRepository {
  constructor(private sensorDataModel: typeof SensorDataModel) {}

  async findAll(limit = 100): Promise<SensorData[]> {
    return await this.sensorDataModel.find().lean().limit(limit);
  }

  async findLatest(): Promise<SensorData | null> {
    return await this.sensorDataModel.findOne().sort({ createdAt: -1 }).lean();
  }
}
