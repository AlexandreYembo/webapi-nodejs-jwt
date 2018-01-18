const {userSchema} = require('../../schemas'),
 jwt = require('jsonwebtoken'),
 bcrypt = require('bcrypt')

const createHashPassword = (user) => {
    user.hash_password = bcrypt.hashSync(user.password, 10)
    return user
}

module.exports = (user) => 
    new userSchema('user').save(createHashPassword(user))