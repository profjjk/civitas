import { Router } from 'express';
const router: Router = Router();

import repRoutes from './representatives';
import electionRoutes from './elections';

router.use('/representatives', repRoutes);
router.use('/elections', electionRoutes);

export default router;