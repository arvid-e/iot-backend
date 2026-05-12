import mqtt from 'mqtt';

import type { SensorData } from '../interfaces/sensor-data.js';
import SensorDataModel from '../models/SensorData.js';

export function connectMQTT() {
  const client = mqtt.connect('mqtt://broker.emqx.io:1883');

  client.on('connect', () => {
    client.subscribe('lnu/iot/ae225aw/sensor');
    console.log('Connected to MQTT broker');
  });

  client.on('message', async (topic, message) => {
    try {
      const payload = JSON.parse(message.toString());

      if (!isSensorData(payload)) {
        console.error('Invalid sensor data shape');
        return;
      }

      await SensorDataModel.create(payload);
    } catch (error) {
      console.error('Failed to parse MQTT message', error);
    }
  });
}

function isSensorData(data: unknown): data is SensorData {
  return (
    typeof data === 'object' &&
    data != null &&
    'temperature' in data &&
    'humidity' in data &&
    'device_timestamp' in data
  );
}
