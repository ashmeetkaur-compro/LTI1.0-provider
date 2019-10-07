const express = require('express');
var bodyParser = require('body-parser')
const oauth = require('oauth-sign');
const app = express();
const method = 'POST';
const timestamp = Math.round(Date.now() / 1000);
const config = require('E:/PracticeProjects/lti1.1_provider/config.json');

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => res.send('Hello World!'));


app.post('/', (req,res) => {
  var params = {
    // LTI Required Parameters
    lti_message_type: 'basic-lti-launch-request',
    lti_version: 'LTI-1p0',
    resource_link_id: 'resourceLinkId',
    oauth_consumer_key: 'consumer_key',
    oauth_signature_method: 'HMAC-SHA1',
    oauth_timestamp: timestamp,
    oauth_version: '1.0'
};
var action = "";
var signature = oauth.hmacsign(method, action, params, config.secret);
console.log("provider  Signature ->"+signature);

var consumer_signature = req.body.signature;
console.log("client  Signature ->"+req.body.signature);


if(consumer_signature === signature) {
  res.sendFile("E:/PracticeProjects/lti1.1_provider/launch.json");
}
else{
  res.json({"message": "Signature not verified"});
}
});

var port = (process.env.PORT || 5000);

var server = app.listen(port, function () {
  console.log("Express is working on port " + port);
});


