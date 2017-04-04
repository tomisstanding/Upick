const eventful  = require('eventful-node');

let controller = {};

controller.findEvents = (req, res) => {
  const client = new eventful.Client(process.env.API_KEY);

  console.log(req.query.date);
// hardcoded date to today for now until calendar is working
  client.searchEvents({
    keywords: req.query.keywords,
    location: req.query.location,
    date: 'today',
    within: '5',
    units: 'miles'
  },
  (err, data) => {
    console.log(err);
    if (err) {
      res.status(400).json({error: err});
    } else {
      res.status(200).json({results: data});
    }
  });
}


module.exports = controller;
