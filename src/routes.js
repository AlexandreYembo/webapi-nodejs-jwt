const express = require('express'),
 userController = require('./api/controllers'),
 controllers = require('./api/controllers'),
 authorizeHandler = require('./api/request-handlers/authorize-handlers')


module.exports = (app) => {
  app.post('/register', controllers.register)
  app.post('/signIn', controllers.signIn)
  app.route('/list')
 .get(authorizeHandler.authorize, controllers.list)
}
