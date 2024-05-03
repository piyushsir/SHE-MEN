import express from "express";
import AuctionController from "../controllers/Auction.Controller.js"
const router = express.Router();


router.get('/',  AuctionController.index);
router.post('/',  AuctionController.save);
router.put('/:BidId',  AuctionController.updation);
router.delete('/:BidId',  AuctionController.deletion);


export default router;