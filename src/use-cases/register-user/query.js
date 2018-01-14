const {userSchema} = require('../../schemas'),
 jwt = require('jsonwebtoken'),
 bcrypt = require('bcrypt')

const createHashPassword = (user) => {
    user.hash_password = bcrypt.hashSync(user.password, 10)
    return user
}

const register = ({collection}) => (user) => 
 new userSchema(collection).save(createHashPassword(user))

module.exports = {
    register: register
}