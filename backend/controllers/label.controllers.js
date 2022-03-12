import Category from '../models/category.model.js';
import Transaction from '../models/transaction.model.js';

export const getLabels = async (req, res) => {
    Transaction.aggregate([
        {
            $lookup: {
                from: 'categories',
                localField: 'type',
                foreignField: 'type',
                as: 'categories_info'
            }
        },
        {
            $unwind: '$categories_info'
        }
    ]).then((result) => {
        let data = result.map((v) => Object.assign({}, {
            _id: v._id,
            name: v.name,
            type: v.type,
            amount: v.amount,
            color: v.categories_info['color']
        }));
        res.json(data);
    }).catch((err) => {
        res.status(400).json('Lookup collection error!');
    });
}
