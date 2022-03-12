import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    type: {
        type: String,
        default: 'Investment'
    },
    color: {
        type: String,
        default: '#FCBE44'
    }
});

const Category = mongoose.model('categories', categorySchema);

export default Category;
