const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  books: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model("Book", BookSchema);
