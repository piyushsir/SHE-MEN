import express from "express";
import customerController from "../controllers/Customer.Controller.js"
const router = express.Router();


router.get('/',  customerController.index);
router.post('/',  customerController.save);
router.put('/:email',  customerController.updation);
router.delete('/:email',  customerController.deletion);


export default router;