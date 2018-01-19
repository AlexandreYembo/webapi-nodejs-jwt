const registerUser = require('../../use-cases/register-user/query'),
  {duplicateKey} = require('../../errors')

const success = (res) => res.json(true)
const duplicateKeyError = (res) => (error) => res.status(400).send({message: error})
const error = (res) => (error) => res.status(500).send({message: error})

module.exports = (req, res) =>
    registerUser(req.body)
    .then(success(res))
    .catch(duplicateKey, err => duplicateKeyError(res)(err))
    .catch(err => error(res)(err))

  