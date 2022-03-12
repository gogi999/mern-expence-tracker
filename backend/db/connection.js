import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const conn = mongoose.connect(process.env.MONGO_URI)
    .then((db) => {
        console.log('MongoDB successfully connected!');
        return db;
    }).catch((err) => {
        console.log('Error connecting MongoDB!!!');
    });

export default conn;
