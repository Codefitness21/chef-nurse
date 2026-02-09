//Mongoose is helping us talk to our database.

const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  saved: {
    type: String,
    required: true,
    default: false,
  },
});

//model created to interact with database
module.exports = mongoose.model("Todo", TodoSchema);
