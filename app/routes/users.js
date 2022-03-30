var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET users listing. */
router.post('/post', function(req, res, next) {
  res.send('type POST');
});

/* GET users listing. */
router.get('/get', function(req, res, next) {
  res.send('type GET');
});

/* GET users listing. */
router.put('/put', function(req, res, next) {
  res.send('type PUT');
});

/* GET users listing. */
router.delete('/delete', function(req, res, next) {
  res.send('type DELETE');
});

/* GET users listing. */
router.post('/create', function(req, res, next) {
  res.send(req.body);
});

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  res.send(req.params.id);
});

module.exports = router;
