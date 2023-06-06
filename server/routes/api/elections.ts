import { Router } from 'express';
import electionController from '../../controllers/electionController';

const router = Router();

router.route('/')
    .post(electionController.findAllElections);

router.route('/address')
    .post(electionController.findElectionsByAddress);

export default router;