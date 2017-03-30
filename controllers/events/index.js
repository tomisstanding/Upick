const router = require('express').Router();
const controller = require('./controller.js');

router.get('/', controller.findEvents)


module.exports = router;
