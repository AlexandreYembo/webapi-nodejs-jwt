module.exports = {
  MONGO_CONNECTION_STRING: process.env.MONGO_CONNECTION_STRING || 'mongodb://admin:123@cluster0-shard-00-00-dhzdk.mongodb.net:27017,cluster0-shard-00-01-dhzdk.mongodb.net:27017,cluster0-shard-00-02-dhzdk.mongodb.net:27017/JWT?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin'
}