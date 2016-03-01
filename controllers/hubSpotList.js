var HubSpotList = require('../models/hubSpotList.js');

var hubSpotListController = {
  getAllLists: function(req, res) {
    HubSpotList.find({}, function(err, results) {
      console.log('results', results);
      res.send(results);
    })
  }
}

module.exports = hubSpotListController;
