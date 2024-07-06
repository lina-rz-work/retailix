import Order from "../models/order.model.js";

export const createOrder = async (req, res) => {
  try {
    const userId = req.user.id;
    const { items, totalAmount } = req.body;

    const newOrder = new Order({
      userId,
      items,
      totalAmount,
    });

    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ message: 'Error while creating order', error });
  }
};


export const getOrders = async (req, res) => {
  try {
    const userId = req.user.id;
    const orders = await Order.find({ userId });

    if (orders.length === 0) {
      return res.status(200).json([]);
    }

    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Error when fetching orders', error });
  }
};


export const cancelOrder = async (req, res) => {
  const { orderId } = req.body;
  try {
    await Order.findByIdAndDelete(orderId);
    res.status(200).json({ message: 'Order cancelled', cancelledOrderId: orderId });
  } catch (error) {
    res.status(500).json({ message: 'Error when canceling order' });
  }
};

