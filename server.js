const express = require('express');
const app = express();
var MongoClient = require('mongodb').MongoClient


app.use(express.static(__dirname + '/client/build'));

app.listen(process.env.PORT, () => {
  MongoClient.connect(process.env.MONGODB_URI, function(err, db) {
   
      var collection = db.collection('documents');
      // Insert some documents
      collection.insertMany([
        {a : 1}, {a : 2}, {a : 3}
      ], function(err, result) {
        console.log("Inserted 3 documents into the collection");
        console.log(result);
      });
    })
    db.close();
  });
});


