const express = require('express');
const bodyParser = require('body-parser')

const config = require('./config');
const routes = require('./routes');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routes);

const port = (process.env.PORT || 5000);
app.listen(port, function () {
  console.log("Express is working on port " + port);
});
