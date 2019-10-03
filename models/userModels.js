const { model, Schema } = require("mongoose");
const bcrypt = require("bcrypt");

const users = new Schema({
  name: { type: String, required: true },
  id: { type: Number, required: false },
  cellphone: { type: Number, required: false },
  email: { type: String, required: true },
  username: { type: String, required: false },
  password: { type: String, required: true },
  status: { type: Boolean, required: false, default: true },
  create_at: { type: Date, default: Date.now() }
});

users.methods.encryptPassword = async password => {
  const salt = await bcrypt.genSalt(10);
  const hash = bcrypt.hash(password, salt);
  return hash;
};

users.methods.matchPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

module.exports = model("users", users);
