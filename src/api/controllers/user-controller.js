'use strict'
const jwt = require('jsonwebtoken'),
bcrypt = require('bcrypt')

const  {register} = require('../request-handlers')

module.exports = {
  register: (req, res) =>{
    return register(req, res)
  }
}