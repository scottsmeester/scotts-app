var express = require('express');
var router = express.Router();
var hubSpotLists = require('../controllers/hubSpotList');

router.get('/hubSpotLists', hubSpotLists.getAllLists);

module.exports = router;
