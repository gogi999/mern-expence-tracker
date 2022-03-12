import Transaction from '../models/transaction.model.js';

export const createTransaction = async (req, res) => {
    if (!req.body) return res.status(400).json({
        message: 'Post HTTP data not provided!'
    });

    let { name, type, amount } = req.body;

    const newTransaction = await new Transaction({
        name,
        type,
        amount,
        date: new Date()
    });

    newTransaction.save((err) => {
        if (!err) return res.json(newTransaction);

        return res.status(400).json({
            message: `Error while creating transaction ${err}`
        });
    })
}

export const getTransactions = async (req, res) => {
    let data = await Transaction.find({});

    return res.json(data);
}

export const deleteTransaction = async (req, res) => {
    if (!req.body) res.status(400).json({
        message: 'Request body not found!'
    });

    await Transaction.deleteOne(req.body, (err) => {
        if (!err) res.json('Record deleted!');
    }).clone().catch((err) => {
        return res.json('Error while deleting transaction record!');
    });
}
