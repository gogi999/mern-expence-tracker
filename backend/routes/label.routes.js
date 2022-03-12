import express from 'express';
import { getLabels } from '../controllers/label.controllers.js';

const router = express.Router();

router.route('/api/labels')
    .get(getLabels);

export default router;
