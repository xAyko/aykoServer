const express = require("express");
const app = express();


app.get('aykoserver', function(request, response) {
  console.log('Works!');
  response.send('It works!');
});


app.listen(3000, function(){
  console.log("App listening!");
});
