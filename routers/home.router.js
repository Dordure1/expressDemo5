const express = require('express')
const homeController = require('../controllers/home.controller')

const homeRouter = express.Router()

homeRouter.get('/', homeController.index)
homeRouter.get('/contact', homeController.contact)
homeRouter.post('/contact', homeController.contactPost)


module.exports = homeRouter