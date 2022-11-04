const express = require('express')
const recipeController= require('../controllers/recipe.controller')

const recipeRouter = express.Router()

recipeRouter.get('/', recipeController.index)
recipeRouter.get('/newrecipe', recipeController.newRecipe)
recipeRouter.post('/newrecipe', recipeController.newRecipePost)


module.exports = recipeRouter