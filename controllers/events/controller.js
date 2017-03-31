const eventful  = require('eventful-node');

let controller = {};

controller.findEvents = (req, res) => {
  console.log(req.query.location);
  const client = new eventful.Client(process.env.API_KEY);

// Change Brooklyn to req.query.location after it works
  client.searchEvents({
    // location: req.query.location,
    location: req.query.location,
    // page_size = number of results
    page_size: '3',
    within: '1',
    units: 'miles'
  },
  (err, data) => {
    if (err) {
      res.status(400).json({error: err});
    } else {
      res.status(200).json({results: data});
    }
  });
}


module.exports = controller;
