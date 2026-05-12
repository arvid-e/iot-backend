import { Document } from 'mongoose';

export interface SensorData {
  temperature: number;
  humidity: number;
  device_timestamp: number;
}

export interface SensorDataDocument extends SensorData, Document {}
