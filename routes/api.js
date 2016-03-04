var express = require('express');
var router = express.Router();
// var hubSpotListsGet = require('../controllers/hubSpotList');

router.route('/hubSpotLists')

    .get(function(req, res){

      hubSpotListsGet.getAllLists(function(err, allLists){
        if (err) {
          res.send(err);
        }
        else {
          res.json(allLists);
          res.send(allLists);
        }
      })
    });

// router.get('/hubSpotLists', function(req, res, next){
//   res.json({ message: 'hooray! welcome to our api!' });   
// });

module.exports = router;
