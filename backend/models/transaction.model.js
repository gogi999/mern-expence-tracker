import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
    name: {
        type: String,
        default: 'Anonymous'
    },
    type: {
        type: String,
        default: 'Investment'
    },
    amount: {
        type: Number
    }, optsdate: {
        type: Date,
        default: Date.now()
    }
});

const Transaction = mongoose.model('transactions', transactionSchema);

export default Transaction;
