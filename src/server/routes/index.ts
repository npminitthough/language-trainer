import {Router} from 'express';
import verbsRoutes from './verbs.routes';
import { authRoutes } from './auth.routes';

// mounting different route handlers
// AKA attach pre-defined endpoints to specific path prefixes
const router = Router();
router.use('/verbs', verbsRoutes);
router.use('/auth', authRoutes)

export {router as routes};