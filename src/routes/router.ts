import { Router } from 'express';
import sensorRoutes from './sensor-routes.js';

const router = Router();

router.use('/sensor', sensorRoutes);

export default router;
