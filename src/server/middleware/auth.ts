import type { RequestHandler } from 'express';
import { LOGIN_PATH } from '../config/constants';

// Middleware to ensure the user is authenticated
export const ensureAuthenticated: RequestHandler = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
    return undefined;
  }
  res.redirect(LOGIN_PATH);
};

