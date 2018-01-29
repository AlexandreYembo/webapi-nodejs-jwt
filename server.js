global.Promise = require('bluebird')

const routes = require('./src/routes'),
 bootstrap = require('./src/bootstrap'),
 config = require('./src/config')

const express = require('express'),
bodyParser = require('body-parser'),
cors = require('cors'),
jwt = require('jsonwebtoken')

bootstrap.init().then(() =>{
  const app = express()
  app.use(bodyParser.json())

  //implement Jason Web Token validation
  app.use(function(req, res, next) {
    if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
      jwt.verify(req.headers.authorization.split(' ')[1], config.KEY_JWT, (err, decode) => {
        if (err) 
        {
          req.user = undefined
          return res.status(401).json({ message: err })
        }
        req.user = decode
        next()
      })
    } else {
      req.user = undefined
      next()
    }
  });

  app.use(cors())
  
  app.use(bodyParser.urlencoded({
    extended: true
  }))

  routes(app)

  let port = process.env.port || 3000

  app.listen(port, () => console.log(`Listening on port ${port}...`))

  module.exports = app
})