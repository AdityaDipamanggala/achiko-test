const routes = require('express').Router()
const UserController = require('./controller')
const { Router } = require('express')

routes.post('/login', UserController.login)
routes.post('/register', UserController.register)
routes.get('/user', UserController.getUser)

module.exports = routes