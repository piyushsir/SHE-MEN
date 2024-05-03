import Auction from '../models/Auction.js'

async function index(req, res, next){
    try{
        const auction = await Auction.find();
        return res.status(200).json({
            status: 200,
            data: auction
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
        const auction = new Auction();
        auction.Hostby = req.body.Hostby;
        auction.BidId = req.body.BidId
        auction.email = req.body.email;
        auction.EntryPassword = req.body.EntryPassword;
        auction.InitialBid = req.body.InitialBid;
        auction.Bids = req.body.Bids;
        auction.Duration = req.body.Duration;
        auction.ItemName = req.body.ItemName;
        await auction.save();

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
        const {BidId} = req.params;
        console.log({BidId})
     
        await Auction.deleteOne({"BidId" : BidId}).then(()=>{}).catch(()=>{console.log("error in deletion")})
     
        return res.status(200).json({
            status: 200,
            data: BidId+"deleted" 
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
        const { BidId } = req.params;
        console.log({BidId})
        await Auction.updateOne({"BidId":BidId}, {$set : req.body}).then(()=>{}).catch(()=>{console.log("errrrrorr")});
        
        return res.status(200).json({
            status: 200,
            data: BidId + "updated"
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