const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  home: {
    type: String,
    required: true,
    default: false,
  },
  completed: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model("Book", BookSchema);
