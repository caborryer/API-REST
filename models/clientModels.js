const { model, Schema } = require("mongoose");

const clients = new Schema({
  name: String,
  cellphone: String,
  addres: String,
  create_at: { type: Date, default: Date.now() }
});

module.exports = model("clients", clients);
