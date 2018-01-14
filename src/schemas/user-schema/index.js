const mongoose = require('mongoose')
const schema = require('./userSchema')

module.exports = (collection) => mongoose.model(collection, schema, collection)