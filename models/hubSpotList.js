var mongoose = require('mongoose');

var hubSpotListSchema = mongoose.Schema({
  listName: String,
  hubSpotListId: String,
  lastCount: Number,
  lastUpdate: Date
});

var HubSpotList = mongoose.model('HubSpotList', hubSpotListSchema);

module.exports = HubSpotList;
