import { Router } from 'express';
import apiRoutes from './api';
// import path from 'path';

const router = Router();

// API Routes
router.use('/api', apiRoutes);

// If no API routes are hit, send the React app
// router.use((req: Request, res: Response): void => {
//   res.sendFile(path.join(__dirname, '../../client/public/api.js.html'));
// });

export default router