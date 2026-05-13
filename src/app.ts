import express from 'express';

import { globalErrorHandler } from './middlewares/error-handler.js';
import { handleUndefinedRoutes } from './middlewares/handle-undefined-routes.js';
import router from './routes/router.js';

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1', router);
app.all('{*path}', handleUndefinedRoutes);
app.use(globalErrorHandler);
