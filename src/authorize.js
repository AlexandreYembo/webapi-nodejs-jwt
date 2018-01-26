const {invalidHeader, expiredToken} = require('./errors'),
jwt = require('jsonwebtoken'),
config = require('./config')

const auth = (req, res, next) =>{
  isValidHeaderAttributes(req)
  .then(result=> verifyJWT(req))
  .then(decode => validUser(req)(decode))
  .catch(invalidHeader, invalidPar(req))
  .catch(expiredToken => expiredTokenError(req))
}

const isValidHeaderAttributes = ({headers}) =>
  headers && headers.authorization && headers.authorization.split(' ')[0] === 'JWT' ? Promise.resolve(true) : Promise.reject(invalidHeader('Invalid header attributes'))

const verifyJWT = ({headers}) =>{
  try{
    const result = jwt.verify(headers.authorization.split(' ')[1], config.KEY_JWT)
    return Promise.resolve(result)
  }catch (error){
      return Promise.reject(expiredToken(error))
  }
}

const invalidPar = (req) =>{
  req.user = undefined
  return Promise.reject(req)
}

const expiredTokenError = (req) => {
  req.user = undefined
  return Promise.reject(req)
}

const validUser = (req) => (decode) =>{
  req.user = decode
  return Promise.resolve(req)
}
module.exports = {
  auth: (req, res, next) => auth(req, res, next)
}