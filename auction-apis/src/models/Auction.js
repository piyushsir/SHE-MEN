import mongoose from "mongoose";

const Schema = mongoose.Schema;

const AuctionSchema = new Schema({
    BidId : Number,
    Hostby:String,
    email: String,
    EntryPassword: String,
    Duration: String,
    InitialBid : String,
    ItemName:String,
    Bids : [{
        time : String,
        Amount : String,
        Bidder : String,
        BidderPhone : String
    }]
});

export default mongoose.model('Auction', AuctionSchema);