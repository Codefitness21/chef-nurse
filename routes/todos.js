const express = require('express')
const router = express.Router()
const todosController = require('../controllers/todos')

//organizes requests coming in and want to be able to pass those off to individual controllers.
router.get('/', todosController.getTodos)

router.post('/createTodo', todosController.createTodo)

router.put('/markComplete', todosController.markComplete)

router.put('/markIncomplete', todosController.markIncomplete)

router.put('/saveTodo', todosController.saveTodo)

router.delete('/deleteTodo', todosController.deleteTodo)

module.exports = router