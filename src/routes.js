const express = require('express'),
 userController = require('./api/controllers'),
 router = express.Router()

 router.route('register').post(userController.register)
 
module.exports = router
  
 // router.route('signIn').post(userController.auth)