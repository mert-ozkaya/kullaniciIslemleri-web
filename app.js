const handlebars = require('handlebars');
const express = require('express');
const path = require('path');

const app = express();

let PORT = 3050;

app.set('views',path.join(__dirname,"views"));
app.set("view engine", "hbs");

app.use('/',require('./requests/router'));



app.listen(PORT, function() {
  console.log('app started on port', PORT);
});
