const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clientSchema = new Schema({
  title: String,
  // body: String,
  // image: String,
  // createdAt: {
  //   type: Date,
  //   default: Date.now,
  // },
});

module.exports = mongoose.model("client", clientSchema);
