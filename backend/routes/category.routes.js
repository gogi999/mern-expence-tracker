import express from 'express';
import { createCategory, getCategories } from '../controllers/category.controllers.js';

const router = express.Router();

router.route('/api/categories')
    .post(createCategory)
    .get(getCategories);

export default router;
