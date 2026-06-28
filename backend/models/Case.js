const mongoose = require("mongoose");

const caseSchema = new mongoose.Schema({
  caseNumber: String,
  clientName: String,
  courtName: String,
  caseType: String,
  hearingDate: String,
  status: String,
});

module.exports = mongoose.model("Case", caseSchema);