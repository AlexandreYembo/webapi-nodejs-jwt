const userSchema = require('../../schemas/user-schema'),
  jwt = require('jsonwebtoken'),
  {userNotFound} = require('../../errors'),
  config = require('../../config')


const createTokenResult = (user) =>{
  return  {
    token: jwt.sign({email: user.email, fullName: user.fullName, _id: user._id},
      config.KEY_JWT, {expiresIn: 60 })
   }
}
  module.exports = (user) => 
  userSchema.getUser(user)
  .then(result => result.comparePassword(user.password))
  .then(result => createTokenResult(result))