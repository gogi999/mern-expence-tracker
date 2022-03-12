import Category from '../models/category.model.js';
import Transaction from '../models/transaction.model.js';

export const createCategory = async (req, res) => {
    const category = new Category({
        type: 'Investment', 
        color: '#FCBE44'
    });

    await category.save((err) => {
        if (!err) return res.json(category);

        return res.status(400).json({
            message: `Error while creating category ${err}`
        });
    });
}

export const getCategories = async (req, res) => {
    let data = await Category.find({});

    let filteredData = await data.map(
        (v) => Object.assign({}, { 
            type: v.type, color: v.color 
        }
    ));
    return res.json(filteredData);
}
