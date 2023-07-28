// src/models/product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  ProductID: { type: String, required: true },
  Link: { type: String, required: true },
  Title: { type: String, required: true },
  Price: { type: Number, required: true },
  VideoID: { type: String, required: true }, // Assuming the Product is associated with a VideoID
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
