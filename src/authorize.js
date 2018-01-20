const {invalidHeader} = require('./errors'),
jwt = require('jsonwebtoken'),
config = require('./config')

const isValidHeaderAttributes = ({headers}) =>
  headers && headers.authorization && headers.authorization.split(' ')[0] === 'JWT' || Promise.reject(invalidHeader('Invalid header attributes'))

const verifyJWT = ({headers}) =>{
  const result = jwt.verify(headers.authorization.split(' ')[1], config.KEY_JWT)
}
module.exports = (app) => {
  app.use((req, res, next) =>{
    isValidHeaderAttributes(req)
    .then(verifyJWT)
  })
}