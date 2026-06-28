const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  caseNumber: String,
  clientName: String,
  interimOrder: String,
  decreedStatus: String,
  orderDate: String,
  remarks: String,
});

module.exports = mongoose.model("Order", orderSchema);