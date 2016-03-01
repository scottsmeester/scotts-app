var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', 
    { title: 'Scotts Apps',
      desc: 'My personal apps for business usage.' });
});

/* GET Bulk Loader page. */
router.get('/bulkloader', function(req, res, next) {
  res.render('bulkloader', 
    { title: 'Bulk Loader Stats',
      desc: 'My app for Bulk Loader statistics.' });
});

/* GET Bulk Loader page. */
router.get('/ce_availability', function(req, res, next) {
  res.render('ce_availability', 
    { title: 'CE Availability Reports',
      desc: 'My app for Bulk Loader statistics.' });
});

/* GET Bulk Loader page. */
router.get('/zendesk', function(req, res, next) {
  res.render('zendesk', 
    { title: 'Zendesk Ticket Report',
      desc: 'My app for Bulk Loader statistics.' });
});

module.exports = router;
