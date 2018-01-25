global.Promise = require('bluebird')

const controllers = require('./api/controllers'),
 //routes = require('./routes'),
 bootstrap = require('./bootstrap'),
 config = require('./config'),
 authorizeHandler = require('./api/request-handlers/authorize-handlers'),
 authorize = require('./authorize')

const express = require('express'),
bodyParser = require('body-parser'),
cors = require('cors'),
jwt = require('jsonwebtoken')

bootstrap.init().then(() =>{
  const app = express()
  app.use(bodyParser.json())
  
  app.use(function(req, res, next) {
    authorize()
  })

  // app.use(function(req, res, next) {
  //   if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
  //     jwt.verify(req.headers.authorization.split(' ')[1], config.KEY_JWT, function(err, decode) {
  //       if (err) req.user = undefined;
  //       req.user = decode;
  //       next();
  //     });
  //   } else {
  //     req.user = undefined;
  //     next();
  //   }
  // });

  app.use(cors())
  
  app.use(bodyParser.urlencoded({
    extended: true
  }))

 // app.use('/api/', routes)
 app.post('/register', controllers.register)
 app.post('/signIn', controllers.signIn)
 app.route('/list')
  .get(authorizeHandler.authorize, controllers.list)

  let port = process.env.port || 3000

  app.listen(port, () => console.log(`Listening on port ${port}...`))

  module.exports = app
})