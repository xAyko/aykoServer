const express = require("express");
const app = express();


app.get('/testaytko', function(request, response) {
  console.log('Works!');
  response.send('It works!');
});