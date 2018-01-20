'use strict'
const jwt = require('jsonwebtoken'),
bcrypt = require('bcrypt')

const  {register, signIn} = require('../request-handlers')

module.exports = {
  register: (req, res) => register(req, res),
  signIn: (req, res) => signIn(req, res)
}