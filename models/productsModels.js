const { model, Schema } = require("mongoose");

const products = new Schema({
  name: { type: String, required: true },
  id: { type: Number, required: false },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  quantity: { type: String, required: false },
  stock: { type: String, required: false },
  filename: { type: String },
  status: { type: Boolean, required: false, default: true },
  create_at: { type: Date, default: Date.now() }
});

module.exports = model("products", products);
