const mongoose = require('mongoose'),
 config = require('./config')

module.exports = {
  init() {
    mongoose.Promise = require('bluebird')
    return mongoose.connect(config.MONGO_CONNECTION_STRING, {useMongoClient: true})
      .then(() => console.time('Mongo Connected'))
  }
}