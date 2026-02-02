//Mongoose is helping us talk to our database.

const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  // saved: {
  //    type: Boolean,
  //   required: true,
  // }
})

module.exports = mongoose.model('Todo', TodoSchema)
