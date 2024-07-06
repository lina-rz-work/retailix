import mongoose from 'mongoose';

const cartItemSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    default: 0,
  },
}, { _id: false });


const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  items: [cartItemSchema],
  totalAmount: {
    type: String,
    required: true,
  }
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);

export default Order;
