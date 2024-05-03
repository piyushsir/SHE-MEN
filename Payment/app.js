const express = require("express");
const app = express();
const cors = require("cors");
const stripe = require("stripe")("sk_test_51PAmCASIJbIoqQ3KjC71XE9QqiqIgCQPlxM7Ol2U8pe9DpQPyj7KvbUZDVz1BXk0xMT7ssPKeZJWbaqDCEKWxCNR00fxSZY964");

app.use(express.json());
app.use(cors());

// checkout api
app.post("/api/create-checkout-session",async(req,res)=>{
    const {products,cost} = req.body;

   console.log(products)
    const lineItems = products.map((product)=>({
        price_data:{
            currency:"inr",
            product_data:{
                name:product.name,
                images:[product.imageUrl]
            },
            unit_amount:product.price * 100,
        },
        quantity:product.quantity
    }));

    const session = await stripe.checkout.sessions.create({
        payment_method_types:["card"],
        line_items:lineItems,
        mode:"payment",
        success_url:"http://localhost:3000/",
        cancel_url:"http://localhost:3000/shop",
    });

    res.json({id:session.id})
 
})


app.listen(7000,()=>{
    console.log("server start")
})