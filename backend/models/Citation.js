const mongoose = require("mongoose");

const citationSchema = new mongoose.Schema({
  citationNumber: String,
  caseName: String,
  courtName: String,
  judgeName: String,
  year: String,
  summary: String,
});

module.exports = mongoose.model("Citation", citationSchema);