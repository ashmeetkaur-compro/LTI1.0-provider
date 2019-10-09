const express = require('express');
const bodyParser = require('body-parser');
const exphbs  = require('express-handlebars');
const path = require('path');

const routes = require('./routes');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routes);

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

const port = (process.env.PORT || 5000);
app.listen(port, function () {
  console.log("Express is working on port " + port);
});
