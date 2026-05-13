import { Router } from 'express';

import { SensorController } from '../controllers/sensor-controller.js';
import SensorDataModel from '../models/SensorData.js';
import { SensorRepositoryImpl } from '../repositories/sensor-repository.js';
import { SensorServiceImpl } from '../services/sensor-service.js';

const sensorRepository = new SensorRepositoryImpl(SensorDataModel);
const sensorService = new SensorServiceImpl(sensorRepository);
const sensorController = new SensorController(sensorService);

const router = Router();

router.get('/', sensorController.getHistoricalData);
router.get('/latest', sensorController.getLatestData);

export default router;
