const registerUser = require('../../use-cases/register-user/query')

const success = (res) => (user) =>{
  user.hash_password = null
  res.json(user)
}

const error = (res) => (result) =>
  res.status(400).send({message: result})

module.exports = (req, res) =>{
    registerUser(req.body)
    .then(success)
    .catch(error)
}
  