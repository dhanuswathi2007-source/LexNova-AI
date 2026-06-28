const mongoose = require("mongoose");

const firSchema = new mongoose.Schema({

  firNumber: String,

  complainant: String,

  accused: String,

  policeStation: String,

  firDate: String,

  section: String,

  status: String,

});

module.exports = mongoose.model("FIR", firSchema);