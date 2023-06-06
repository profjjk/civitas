import { Router } from 'express';
import repController from '../../controllers/repController';

const router = Router();

router.route('/address')
    .post(repController.findByAddress);

router.route('/division')
    .post(repController.findByDivision);

export default router;