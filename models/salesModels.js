const { model, Schema } = require("mongoose");

const sales = new Schema({
  date: { type: Date, default: Date.now() },
  total: { type: Number, required: true },
  client: { type: Schema.Types.ObjectId, ref: "Client" },
  products: [
    {
      products: {
        type: Schema.Types.ObjectId,
        ref: "Product"
      },
      quantity: Number
    }
  ]
});

module.exports = model("sales", sales);
