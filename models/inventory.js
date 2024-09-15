const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productId: {
    type: String,
    unique: true,
  },
  productName: {
    type: String,
    required: true,
  },
  description: String,
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  batchNumber: String,
  manufactureDate: String,
  expiryDate: String,
  supplierEmail: {
    type: String,
    required: true,
  },
  supplierName: {
    type: String,
    required: true,
  },
});

const inventorySchema = new mongoose.Schema({
  retailerEmail: {
    type: String,
    required: true,
  },
  products: [productSchema],
});

module.exports = mongoose.model("Inventory", inventorySchema);
