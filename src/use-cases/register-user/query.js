const UserSchema = require('../../schemas/user-schema'),
 {duplicateKey} = require('../../errors'),
 bcrypt = require('bcrypt')

const createHashPassword = (user) => {
    user.hash_password = bcrypt.hashSync(user.password, 10)
    return user
}

module.exports = (user) => 
    new UserSchema(createHashPassword(user)).save()
    .then(result => result)
    .catch(err => err.message.includes('duplicate key error collection') && Promise.reject(duplicateKey(`Error to register user: ${user.email}. There is an user registred`)) || Promise.reject(err))