const mongoose = require("mongoose");

const advocateSchema = new mongoose.Schema({
  fullName: String,
  enrollmentNumber: String,
  email: String,
  mobile: String,
  district: String,
  password: String,
});

module.exports = mongoose.model("Advocate", advocateSchema);