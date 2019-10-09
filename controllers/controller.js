const oauth = require('oauth-sign');
const config = require('../config');
const method = 'POST';

exports.statusLaunch = (req,res) => {
  res.send('Hello World!')
};

exports.verifyLaunch = (req,res) => {
  
  let consumer_signature = req.body.oauth_signature;
  delete req.body.oauth_signature;
  let provider_signature = oauth.hmacsign(method, config.Provider_URL, req.body, config.secret);
 

  if(consumer_signature === provider_signature) {
    res.json({"message": "LTI Provider Launch successful"});
  }
  else{
    res.json({"message": "Signature not verified"});
  }
};

