import { Router } from 'express';
import { getKey } from '../controllers/api';
import { ensureAuthenticated } from '../middleware/auth';

const router = Router();

// API routes - all require authentication
router.get('/key', ensureAuthenticated, getKey);

export default router;

