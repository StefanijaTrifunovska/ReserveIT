const express = require('express')
const router = express.Router()

const Controller = require('C:/Users/Stefanija/Desktop/ReserveIT/Homework3/reserveitapp/src/models/Controller')

router.post('/register', Controller.register)
router.post('/login', Controller.login)
module.exports = router