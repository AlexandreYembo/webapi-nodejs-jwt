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

userSchema.methods = require('./user-methods')
userSchema.statics = require('./user-statics')

module.exports = userSchema