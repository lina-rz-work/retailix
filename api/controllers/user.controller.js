import User from '../models/user.model.js';
import Cart from '../models/cart.model.js';
import { errorHandler } from '../utils/error.js';
import bcryptjs from 'bcryptjs';

export const updateUser = async (req, res, next) => {
  if (req.user.id !== req.params.id)
    return next(errorHandler(401, 'You can only update your own account!'));
  try {
    if (req.body.password) {
      req.body.password = bcryptjs.hashSync(req.body.password, 10);
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
        },
      },
      { new: true }
    );
    
    const { password, ...rest } = updatedUser._doc;

    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};


export const deleteUser = async (req, res, next) => {
  const userId = req.user.id;

  if (userId !== req.params.id) {
    return next(errorHandler(401, 'You can only delete your own account!'));
  }
  try {
    await User.findByIdAndDelete(req.params.id);
    await Cart.deleteOne({ userId });

    res.clearCookie('access_token');
    res.status(200).json({ success: true, message: 'User has been deleted!' });
  } catch(err) {
    next(err)
  }
}

