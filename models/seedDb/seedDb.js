var HubSpotList = require('../hubSpotList.js');

HubSpotList.find({}, function(err, documents){
  if(documents.length === 0){
    // Prefill the empty database with some data

    var dupes = new HubSpotList({'listName': 'Bulk Loader Total Signups with Duplicates', 'hubSpotListId': '1088'});
    dupes.save();

    var onhold = new HubSpotList({'listName': 'Bulk Loader On Hold', 'hubSpotListId': '1259'});
    onhold.save();

    var unresponsive = new HubSpotList({'listName': 'Bulk Loader Unresponsive', 'hubSpotListId': '1234'});
    unresponsive.save();

    var declined = new HubSpotList({'listName': 'Bulk Loader Declined', 'hubSpotListId': '1233'});
    declined.save();

    var completed = new HubSpotList({'listName': 'Bulk Loader Completed', 'hubSpotListId': '1232'});
    completed.save();

    var inprocess = new HubSpotList({'listName': 'Bulk Loader In Process', 'hubSpotListId': '1231'});
    inprocess.save();

    var scheduled = new HubSpotList({'listName': 'Bulk Loader Scheduled', 'hubSpotListId': '1230'});
    scheduled.save();

    var newsignup = new HubSpotList({'listName': 'Bulk Loader New Signup', 'hubSpotListId': '1229'});
    newsignup.save();
  }
});
