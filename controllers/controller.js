const oauth = require('oauth-sign');
const config = require('../config');
const method = 'POST';

exports.statusLaunch = (req,res) => {
  res.send('Hello World this is new!');
};

exports.verifyLaunch = (req,res) => {

  // Return if the request parameters are invalid
  if(req.body.lti_message_type != "basic-lti-launch-request" || req.body.lti_version != "LTI-1p0" || req.body.oauth_version != "1.0" || req.body.oauth_signature_method != "HMAC-SHA1" || !req.body.oauth_nonce) {
    res.render('error', {
      invalidRequest: true,
    });
    return;
  }

  // Return if the consumer keys is not present
  if(req.body.oauth_consumer_key != config.consumer_key) {
    res.render('error', {
      keyNotFound: true,
    });
    return;
  }

  // Check if the timestamp is older than specified
  if(parseInt(req.body.oauth_timestamp) > Math.round(Date.now() / 1000) && parseInt(req.body.oauth_timestamp) < (Math.round(Date.now() / 1000) - config.timestamp)) {
    res.render('error', {
      invalidRequest: true,
    });
  };
  
  let consumer_signature = req.body.oauth_signature;
  delete req.body.oauth_signature;
  let provider_signature = oauth.hmacsign(method, config.Provider_URL, req.body, config.secret);
 

  if(consumer_signature === provider_signature) {
    res.render('successLaunch', {
      ltiParamters : JSON.parse(JSON.stringify(req.body))
    });
  }
  else{
    res.render('error', {
      validated: true,
    });
  }
};

