const express = require('express');
const app = express();
var MongoClient = require('mongodb').MongoClient
MongoClient.connect(process.env.MONGODB_URI, function(err, db) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  db.close();
});

app.use(express.static(__dirname + '/client/build'));

app.listen(process.env.PORT, () => {
  mongodb
});


