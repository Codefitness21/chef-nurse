const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home')

router.get('/', homeController.getIndex)

// router.get('/getRecipe', homeController.getRecipe)

router.post('/createRecipe', homeController.createRecipe)

module.exports = router