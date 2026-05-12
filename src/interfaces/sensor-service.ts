import type { SensorData } from './sensor-data.js';

export interface SensorService {
  getLatestData(): Promise<SensorData | null>;
  getHistoricalData(): Promise<SensorData[]>;
}
