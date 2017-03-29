const router = require('express').Router();

router.use('/api', require('./controller/api/index.js'));

module.exports = router;
