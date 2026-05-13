import type { NextFunction, Request, Response } from 'express';

import { NotFoundError } from '../errors/not-found.js';

export const handleUndefinedRoutes = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  next(new NotFoundError(req.originalUrl));
};
