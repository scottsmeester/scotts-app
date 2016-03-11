var HubSpotList = require('../hubSpotList.js');

HubSpotList.find({}, function(err, documents){
  if(documents.length === 0){
    // Prefill the empty database with some data

    var dupes = new HubSpotList({
        'listName': 'Bulk Loader Total Signups with Duplicates',
        'hubSpotListId': '1088',
        'lastCount': 14
    });
    dupes.save();

    var onhold = new HubSpotList({
        'listName': 'Bulk Loader On Hold',
        'hubSpotListId': '1259',
        'lastCount': 4
    });
    onhold.save();

    var unresponsive = new HubSpotList({
        'listName': 'Bulk Loader Unresponsive',
        'hubSpotListId': '1234',
        'lastCount': 5
    });
    unresponsive.save();

    var declined = new HubSpotList({
        'listName': 'Bulk Loader Declined',
        'hubSpotListI': '1233',
        'lastCount': 8
    });
    declined.save();

    var completed = new HubSpotList({
        'listName': 'Bulk Loader Completed',
        'hubSpotListId': '1232',
        'lastCount': 14
    });
    completed.save();

    var inprocess = new HubSpotList({
        'listName': 'Bulk Loader In Process',
        'hubSpotListId': '1231',
        'lastCount': 3
    });
    inprocess.save();

    var scheduled = new HubSpotList({
        'listName': 'Bulk Loader Scheduled',
        'hubSpotListId': '1230',
        'lastCount': 5
    });
    scheduled.save();

    var newsignup = new HubSpotList({
        'listName': 'Bulk Loader New Signup',
        'hubSpotListId': '1229',
        'lastCount': 12
    });
    newsignup.save();
  }
});
