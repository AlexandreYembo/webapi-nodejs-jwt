const factory = require('error-factory')

module.exports = {
  duplicateKey: factory('duplicateKey'),
  userNotFound: factory('userNotFound'),
  invalidHeader: factory('invalidHeader'),
  expiredToken: factory('expiredToken')
}