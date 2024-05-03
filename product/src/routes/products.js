import express from "express";
import productsController from "../controllers/ProductsCrud.js"
const router = express.Router();

router.get('/',  productsController.index);
router.post('/',  productsController.save);
router.put('/:title',  productsController.updation);
router.delete('/:title',  productsController.deletion);

export default router;

