module.exports = (req, res, next) => {
  if (req.user) {
    return res.json(req.user)
  } else {
    return res.status(401).json({ message: 'Unauthorized user!' });
  }
}
