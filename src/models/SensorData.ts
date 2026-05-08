import { Schema, model } from 'mongoose';

import type { ISensorDataDocument } from '../interfaces/sensor-data.js';

const userSchema = new Schema<ISensorDataDocument>(
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

const SensorData = model<ISensorDataDocument>('SensorData', userSchema);
export default SensorData;
