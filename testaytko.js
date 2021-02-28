const express = require("express");
const app = express();


app.get('testaytko.js', function(request, response) {
  console.log('Works!');
  response.send('It works!');
});
