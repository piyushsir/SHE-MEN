import Product from '../models/Product.js'

async function index(req, res, next){
    try{
        const products = await Product.find();
        return res.status(200).json({
            status: 200,
            data: products
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
        const product = new Product();
        product.title = req.body.title;
        product.description = req.body.description;
        product.price = req.body.price;
        await product.save();

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
        const {title} = req.params;
        console.log({title})
     
        await Product.deleteOne({"title" : title}).then(()=>{}).catch(()=>{console.log("error in deletion")})
     
        return res.status(200).json({
            status: 200,
            data: title+"deleted" 
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
        const { title } = req.params;
        console.log({title})
        await Product.updateOne({"title":title}, {$set : req.body}).then(()=>{}).catch(()=>{console.log("errrrrorr")});
        
        return res.status(200).json({
            status: 200,
            data: title + "updated"
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