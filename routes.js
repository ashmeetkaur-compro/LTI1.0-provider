const router = require('express').Router();
const controller = require('./controllers/controller');


router.get('/', controller.statusLaunch);

router.post('/' , controller.verifyLaunch);

module.exports = router;