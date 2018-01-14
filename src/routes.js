const {userController} = require('./api/controllers')

module.exports = function(app) {
   app.route('auth/register').post(userController.register)
   app.route('auth/signIn').post(userController.auth)
}