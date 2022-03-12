import express from 'express';
import cors from 'cors';
import conn from './db/connection.js';
import categoryRoutes from './routes/category.routes.js';
import transactionRoutes from './routes/transaction.routes.js';
import labelRoutes from './routes/label.routes.js';

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/', categoryRoutes);
app.use('/', transactionRoutes);
app.use('/', labelRoutes);

conn
    .then((db) => {
        if (!db) return process.exit(1);

        app.listen(port, () => {
            console.log(`Server is running on port ${port}...`);
        });

        app.on('error', (err) => {
            console.log(`Failed to connect with HTTP Server: ${err}`);
        });
    }).catch((error) => {
        console.log(`Connection failed - Error: ${error}!!!`);
    });
