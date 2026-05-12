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
        console.log(`${payload}`);
        return;
      }

      await SensorDataModel.create(payload);
      console.log('Saved sensor data');
    } catch (error) {
      console.error('Failed to parse MQTT message', error);
    }
  });

  client.on('error', (error) => {
    console.error('MQTT connection error:', error);
  });
}

function isSensorData(data: unknown): data is SensorData {
  return (
    typeof data === 'object' &&
    data != null &&
    'temperature' in data &&
    'humidity' in data &&
    'timestamp' in data
  );
}
