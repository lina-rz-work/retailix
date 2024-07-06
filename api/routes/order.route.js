import express from 'express';
import { createOrder, getOrders, cancelOrder } from '../controllers/order.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.post('/orders', verifyToken, createOrder);
router.get('/getOrders', verifyToken, getOrders);
router.delete('/cancelOrder', verifyToken, cancelOrder);

export default router;
