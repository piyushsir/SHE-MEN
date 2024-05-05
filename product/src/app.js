import express from 'express';
import productRoutesrw from './routes/products.js';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const connectToDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://guptapiyush1048:hwoz7qDgZ1U4gqE4@cluster0.uegm7g9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {})
    }catch (e) {
        console.log(e);
        process.exit(1)
    }
}

const app = express();

//middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/products', productRoutesrw);

await connectToDB();

export default app;