import type { SensorData } from './sensor-data.js';

export interface SensorRepository {
  getAll(): Promise<SensorData[]>;
  getLatest(): Promise<SensorData | null>;
}
