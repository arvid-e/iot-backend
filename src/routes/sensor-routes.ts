import { Router } from 'express';

import { SensorController } from '../controllers/sensor-controller.js';
import SensorDataModel from '../models/SensorData.js';
import { SensorRepositoryImpl } from '../repositories/sensor-repository.js';
import { SensorServiceImpl } from '../services/sensor-service.js';

const sensorRepository = new SensorRepositoryImpl(SensorDataModel);
const sensorService = new SensorServiceImpl(sensorRepository);
const sensorController = new SensorController(sensorService);

const getHistoricalData = sensorController.getHistoricalData.bind(sensorController);
const getLatestData = sensorController.getLatestData.bind(sensorController);

const router = Router();

router.get('/', getHistoricalData);
router.get('/latest', getLatestData);

export default router;
