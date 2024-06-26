import User from '../models/user.model.js';
import Cart from '../models/cart.model.js';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ success: false, message: 'All fields are required.' });
  }

  const hashedPassword = bcryptjs.hashSync(password, 10);
  
  const newUser = new User({ username, email, password: hashedPassword });
  
  try {
    await newUser.save();

    const newCart = new Cart({ userId: newUser._id, items: [] });
    await newCart.save();

    res.status(201).json({ success: true, message: 'User created successfully.' });
  } catch(err) {
    if (err.code === 11000) {
      res.status(409).json({ success: false, message: 'This e-mail address is already taken.' });
    } else {
      res.status(500).json({ success: false, message: 'An error occurred.' });
    }
    next(err);
  }
};


export const signin = async (req, res, next) => {
  const { email, password } = req.body; 

  try {
    const validUser = await User.findOne({ email });
    if (!validUser) {
      res.status(404).json({ success: false, message: 'User is not found.' });
    }
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) {
      res.status(401).json({ success: false, message: 'Wrong login or password!' });
    }

    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const { password: pass, ...rest } = validUser._doc;
    res
      .cookie('access_token', token, { httpOnly: true })
      .status(200)
      .json({ ...rest, token });

  } catch(err) {
    next(err);
  }
}


export const signout = async (req, res, next) => {
  try {
    res.clearCookie('access_token');
    res.status(200).json({ success: true, message: 'User has been logged out!' });
  } catch (error) {
    next(error);
  }
}
