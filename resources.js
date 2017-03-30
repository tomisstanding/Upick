const router = require('express').Router();

router.use('/events', require('./controllers/events/index.js'));

module.exports = router;
