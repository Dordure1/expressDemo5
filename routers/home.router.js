const express = require('express')
const homeController = require('../controllers/home.controller')

const homeRouter = express.Router()

homeRouter.get('/', homeController.index)
homeRouter.get('/contact', homeController.index)


module.exports = homeRouter