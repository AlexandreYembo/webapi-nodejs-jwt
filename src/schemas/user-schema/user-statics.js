const {userNotFound} = require('../../errors')

module.exports = {
  getUser: function({email}) {
    return this.findOne({email}).exec()
    .then(result => result || Promise.reject(userNotFound('Authentication failed. Invalid user or password')))
  }
}