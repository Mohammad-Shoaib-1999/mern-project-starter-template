const mongoose = require("mongoose");

const recordSchema = new mongoose.Schema({
    name: {type:String},
    position: {type:String},
    level: {type:String},
    createdAt: {
        type: Date,
        default: Date.now(),
      },
  });

  module.exports = mongoose.model("Record", recordSchema);
