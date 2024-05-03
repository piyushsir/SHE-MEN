import Customer from '../models/Customer.js'

async function index(req, res, next){
    try{
        const customer = await Customer.find();
        return res.status(200).json({
            status: 200,
            data: customer
        });
    }catch (e) {
        console.log(e)
        return res.status(500).json({
            message: e
        });
    }
}

async function save(req, res, next){
    try {
        const customer = new Customer();
        customer.email = req.body.email;
        customer.password = req.body.password;
        customer.phone = req.body.phone;
        customer.address = req.body.address;
        customer.cart =req.body.cart;
        customer.wishlist=req.body.wishlist;
        customer.orders = req.body.orders;
        await customer.save();

        return res.status(201).json({
            status: 201
        });
    }catch (e) {
        console.log(e)
        return res.status(500).json({
            message: e
        });
    }
}


async function deletion(req, res, next){
    try {
        const {email} = req.params;
        console.log({email})
     
        await Customer.deleteOne({"email" : email}).then(()=>{}).catch(()=>{console.log("error in deletion")})
     
        return res.status(200).json({
            status: 200,
            data: email+"deleted" 
        });
    }catch (e) {
        console.log(e)
        return res.status(500).json({
            message: e
        });
    }
}

async function updation(req, res, next){
    try{
        const { email } = req.params;
        console.log({email})
        await Customer.updateOne({"email":email}, {$set : req.body}).then(()=>{}).catch(()=>{console.log("errrrrorr")});
        
        return res.status(200).json({
            status: 200,
            data: email + "updated"
        });
    }catch (e) {
        console.log(e)
        return res.status(500).json({
            message: e
        });
    }
}

export default {
    index:index,
    save:save,
    deletion:deletion,
    updation:updation
};