const MongoClient = require("mongodb").MongoClient;

const client = new MongoClient("mongodb://localhost:27017/crud-dbs");

const connectDb = () => {
  return client.connect();
};

module.exports = {
  client,
  connectDb,
};
