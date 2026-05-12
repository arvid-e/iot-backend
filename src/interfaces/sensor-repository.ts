import type { SensorData } from './sensor-data.js';

export interface SensorRepository {
  findAll(): Promise<SensorData[]>;
  findLatest(): Promise<SensorData | null>;
}
