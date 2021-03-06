const authorize = (req, res, next) => 
  req.user && Promise.resolve(next()) || res.status(401).json({ message: 'Unauthorized user!' })

module.exports = {
  authorize: (req, res, next) => authorize(req, res, next)
}
