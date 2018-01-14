'use strict'

const mongoose = require('mongoose'),
 bcrypt = require('bcrypt'),
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

 userSchema.methods.comparePassword = function(password){
     return bcrypt.compareSync(password, this.hash_password)
 }

 module.exports = userSchema