import { Schema, model } from 'mongoose';

import type { SensorDataDocument } from '../interfaces/sensor-data.js';

const userSchema = new Schema<SensorDataDocument>(
  {
    temperature: {
      type: Number,
    },
    humidity: {
      type: Number,
    },
    device_timestamp: {
      type: Number,
    },
  },
  {
    timestamps: true,
  },
);

const SensorDataModel = model<SensorDataDocument>('SensorData', userSchema);
export default SensorDataModel;
