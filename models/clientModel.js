const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clientSchema = new Schema({
  fullName: String,
  password: String,
  dob: Date,
  gender: String,
  mobile: Number,
  email: String
});

module.exports = mongoose.model("client", clientSchema);
