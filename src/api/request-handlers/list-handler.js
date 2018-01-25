const list = ({user}, res) =>
  res.json(user)

module.exports = (req, res) => {
  list: list(req, res)
}