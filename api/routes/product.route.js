import express from 'express';
import { getAllProducts, createProduct, getNewCollection } from '../controllers/product.controller.js';

const router = express.Router();

router.get('/products', getAllProducts);
router.post('/products', createProduct);
router.get('/products/newcollection', getNewCollection);

export default router;
