import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
    email: String,
    password: String,
    phone: String,
    address:[
        {
            street: String,
            postalCode: String,
            city: String,
            country: String
        }
    ],
    cart: [
        {
          product: {
            title:String,
            description:String,
            price : String
        },
          unit: Number
        }
    ],
    wishlist:[
        { 
            product: {
                title:String,
                description:String,
                price : String
            }
        }
    ],
    orders: [ 
        { 
             
                product: {
                  title:String,
                  description:String,
                  price : String
              },
                date: Date,
                day : String
              
        }
    ]
});

export default mongoose.model('Product', CustomerSchema);