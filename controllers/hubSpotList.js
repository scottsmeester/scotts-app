var HubSpotList = require('../models/hubSpotList.js');

var hubSpotListController = {
  getAllLists: function(req, res) {
    HubSpotList.find({}, function(err, results) {
      if (err) {
        res.send(err);
      }
      res.send(results);
    })
  }
}

module.exports = hubSpotListController;
