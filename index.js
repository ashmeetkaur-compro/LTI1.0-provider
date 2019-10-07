const express = require('express');
var bodyParser = require('body-parser')
const oauth = require('oauth-sign');
const app = express();
const method = 'POST';

const path = require('path');
const config = require(path.join(__dirname, 'config'));

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => res.send('Hello World!'));

app.post('/', (req,res) => {
var action = "https://lti1-provider.herokuapp.com/";
var consumer_signature = req.body.oauth_signature;
delete req.body.oauth_signature;
var signature = oauth.hmacsign(method, action, req.body, config.secret);
console.log("provider  Signature ->"+signature);
console.log("client  Signature ->"+consumer_signature);


if(consumer_signature === signature) {
  res.json({"message": "LTI Provider Launch successful"});
}
else{
  res.json({"message": "Signature not verified"});
}
});

var port = (process.env.PORT || 5000);
app.listen(port, function () {
  console.log("Express is working on port " + port);
});
