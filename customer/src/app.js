import express from 'express';
import customerRoutes from './routes/customer.js';
import mongoose from 'mongoose';
import config from "../config.js";
import bodyParser from 'body-parser';

const connectToDB = async () => {
    try {
        await mongoose.connect(config.db_uri, {})
    }catch (e) {
        console.log(e);
        process.exit(1)
    }
}

const app = express();

//middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/customer', customerRoutes);

await connectToDB();

export default app;