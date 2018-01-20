const sigInUser = require('../../use-cases/sign-in-user/query'),
 {userNotFound} = require('../../errors')

const success = (res) => (result) => res.json(result)
const notLogged = (res) => (message) => res.status(401).send({message})
const error = (res) => (message) => res.status(500).send({message})

module.exports = (req, res) => {
  sigInUser(req.body)
  .then(result => success(res)(result))
  .catch(userNotFound, err => notLogged(res)(err))
  .catch(err => error(res)(err))
}