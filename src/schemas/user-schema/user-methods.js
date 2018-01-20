const {userNotFound} = require('../../errors'),
  bcrypt = require('bcrypt')

module.exports = {
  comparePassword: function(password){
    const result = bcrypt.compareSync(password, this.hash_password)
    return result && Promise.resolve(this) || Promise.reject(userNotFound('Authentication failed. Invalid user or password'))
  }
}