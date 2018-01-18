global.Promise = require('bluebird')

const controllers = require('./api/controllers'),
 //routes = require('./routes'),
 bootstrap = require('./bootstrap')

const express = require('express'),
bodyParser = require('body-parser'),
cors = require('cors')

bootstrap.init().then(() =>{
  const app = express()
  app.use(bodyParser.json())
  app.use(cors())
  
  app.use(bodyParser.urlencoded({
    extended: true
  }))

 // app.use('/api/', routes)
 app.post('/register', controllers.register)

  let port = process.env.port || 3000

  app.listen(port, () => console.log(`Listening on port ${port}...`))

  module.exports = app
})