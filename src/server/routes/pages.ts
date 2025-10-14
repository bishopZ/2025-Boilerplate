import { Router } from 'express';
import { ensureAuthenticated } from '../middleware/auth';

const router = Router();

// Page routes - pass to Vite for rendering
router.get('/', ensureAuthenticated, (_, __, next) => {
  next(); // pass to Vite
});

export default router;

