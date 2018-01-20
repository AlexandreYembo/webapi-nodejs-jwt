const registerUser = require('../../use-cases/register-user/query'),
  {duplicateKey} = require('../../errors')

const success = (res) => res.json(true)
const duplicateKeyError = (res) => (message) => res.status(400).send({message})
const error = (res) => (message) => res.status(500).send({message})

module.exports = (req, res) =>
    registerUser(req.body)
    .then(result => success(res))
    .catch(duplicateKey, err => duplicateKeyError(res)(err))
    .catch(err => error(res)(err))

  