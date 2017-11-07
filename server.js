const express = require('express');
const app = express();

app.use(express.static(__dirname + '/client/build'));

app.listen(process.env.PORT, 'localhost', () => {
  console.log("Server listening");
});


