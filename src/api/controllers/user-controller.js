'use strict'
const jwt = require('jsonwebtoken'),
bcrypt = require('bcrypt')

const  {register, signIn, list, authorize} = require('../request-handlers')

module.exports = {
  register: (req, res) => register(req, res),
  signIn: (req, res) => signIn(req, res),
  list: (req, res) => list(req, res),
  authorize: (req, res, next) => authorize(req, res, next)
}