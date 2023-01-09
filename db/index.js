const mongoose = require('mongoose');

const pwd = process.env.PWD;
const username = process.env.UNAME;
const uri = process.env.DB_URL;

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log("Connected to database");
  })
  .catch((err) => console.log('Connection Error', err.message));


const db = mongoose.connection;

module.exports = db;