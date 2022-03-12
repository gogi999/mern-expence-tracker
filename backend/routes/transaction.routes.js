import express from 'express';
import { createTransaction, getTransactions, deleteTransaction } from '../controllers/transaction.controllers.js';

const router = express.Router();

router.route('/api/transactions')
    .post(createTransaction)
    .get(getTransactions)
    .delete(deleteTransaction);

export default router;
