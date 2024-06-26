import Product from "../models/product.model.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createProduct = async (req, res) => {
  const product = new Product(req.body);
  try {
    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getNewCollection = async (req, res) => {
  const products = await Product.find({});
  const id = [21, 6, 13, 25, 19, 36, 35, 9];
  const newCollection = id.map(id => products.find(product => product.id === id));

  try {
    res.json(newCollection);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
