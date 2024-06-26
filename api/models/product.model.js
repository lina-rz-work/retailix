import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
  url: String
}, { _id: false });

const productSchema = new mongoose.Schema({
  id: { 
    type: Number, 
    required: true, 
    unique: true 
  },
  name: { 
    type: String, 
    required: true 
  },
  category: { 
    type: String, 
    required: true 
  },
  images: [imageSchema],
  color: { 
    type: String, 
    required: true 
  },
  newPrice: { 
    type: Number, 
    required: true 
  },
  oldPrice: { 
    type: Number, 
    required: true 
  },
  specifications: { 
    type: mongoose.Schema.Types.Mixed, 
    required: true 
  },
  style: { 
    type: String, 
    required: true 
  },
  description: { 
    type: String, 
    required: true 
  },
  fullDescription: { 
    type: String, 
    required: true 
  }
});

const Product = mongoose.model('Product', productSchema);

export default Product;
