var mongoose = require('mongoose');

var hubSpotListSchema = mongoose.Schema({
  listName: String,
  hubSpotListId: String
});

var HubSpotList = mongoose.model('HubSpotList', hubSpotListSchema);

module.exports = HubSpotList;
