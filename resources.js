const router = require('express').Router();

router.use('/events', require('./controllers/events/index.js'));

router.use('/test', (req, res) => res.json({message: 'success'}));

module.exports = router;
