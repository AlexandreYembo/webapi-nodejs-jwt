'use strict'
const jwt = require('jsonwebtoken'),
bcrypt = require('bcrypt')

const  {signIn, register} = require('../request-handlers')


const signIn

module.exports = {
    signIn: signIn,
    register: register
}