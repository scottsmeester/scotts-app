var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', 
    { title: 'Scotts Apps',
      desc: 'My personal apps for business usage.' });
});

module.exports = router;
