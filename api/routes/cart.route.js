import express from 'express';
import { migrateCart, getCart, increaseItemQuantity, decreaseItemQuantity, removeFromCart } from '../controllers/cart.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.post('/migrate', verifyToken, migrateCart);
router.get('/getCart', verifyToken, getCart);
router.post('/add/:id', verifyToken, increaseItemQuantity);
router.post('/decrease/:id', verifyToken, decreaseItemQuantity);
router.delete('/remove/:id', verifyToken, removeFromCart);

export default router;
