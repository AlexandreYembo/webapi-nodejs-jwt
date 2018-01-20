'use strict'

const mongoose = require('mongoose'),
 Schema = mongoose.Schema

 const userSchema = new Schema({
     fullName: {
         type: String,
         trim : true,
         require: true
     },
     email: {
         type: String,
         unique: true,
         lowercase: true,
         trim: true,
         required: true
     },
     hash_password: {
         type: String,
         required: true
     },
     created: {
         type: Date,
         default: Date.now
     }
 })

//  userSchema.methods.comparePassword = function(password){
//      const result = bcrypt.compareSync(password, this.hash_password)
//      return result || Promise.reject(userNotFound('Authentication failed. Invalid user or password'))
//  }

userSchema.methods = require('./user-methods')
 userSchema.statics = require('./user-statics')

 module.exports = userSchema