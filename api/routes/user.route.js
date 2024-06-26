import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import { deleteUser, updateUser } from '../controllers/user.controller.js';

const router = express.Router();

router.delete('/delete/:id', verifyToken, deleteUser);
router.post('/update/:id', verifyToken, updateUser);

export default router;
