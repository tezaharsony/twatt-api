var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });


  var OAuth = require('oauth');


  //   var oauth = new OAuth.OAuth(
  //     'https://api.twitter.com/oauth/request_token',
  //     'https://api.twitter.com/oauth/access_token',
  //     '6n6HkiviS1oqc1aHkrMvUbwqT',
  //     'vFiGChSkJgL2c8TDuMz9x1BfUC62UV0n1IUfZYJ4lS7djkoWaW',
  //     '1.0A',
  //     null,
  //     'HMAC-SHA1'
  //   );
  //   oauth.get(
  //     'https://api.twitter.com/1.1/trends/place.json?id=23424977',
  //     '900202898608582656-LOlwKtSFTV4zTqeiAANWBBNmgaB1Tqa', //test user token
  //     '0DVO9OME5V9dhfL9GDo19HQLpx8xcJbRUXjeOFmfuU6E4', //test user secret
  //     function (e, data, respond){
  //       if (e) console.error(e);
  //       console.log(require('util').inspect(data));
  //       done();
  //     });
  // });

  router.get('/', function (req, res) {
    var oauth = new OAuth.OAuth(
      'https://api.twitter.com/oauth/request_token',
      'https://api.twitter.com/oauth/access_token',
      '6n6HkiviS1oqc1aHkrMvUbwqT',
      'vFiGChSkJgL2c8TDuMz9x1BfUC62UV0n1IUfZYJ4lS7djkoWaW',
      '1.0A',
      null,
      'HMAC-SHA1'
    );
    oauth.get(
      'https://api.twitter.com/1.1/statuses/home_timeline.json',
      '900202898608582656-LOlwKtSFTV4zTqeiAANWBBNmgaB1Tqa', //test user token
      '0DVO9OME5V9dhfL9GDo19HQLpx8xcJbRUXjeOFmfuU6E4', //test user secret
      function (e, data, respond){
        if (e) res.send(e);
        res.send(data);
      });
  })

  router.get('/search/:keywords', function (req, res) {
    var oauth = new OAuth.OAuth(
      'https://api.twitter.com/oauth/request_token',
      'https://api.twitter.com/oauth/access_token',
      '6n6HkiviS1oqc1aHkrMvUbwqT',
      'vFiGChSkJgL2c8TDuMz9x1BfUC62UV0n1IUfZYJ4lS7djkoWaW',
      '1.0A',
      null,
      'HMAC-SHA1'
    );
    oauth.get(
      `https://api.twitter.com/1.1/search/tweets.json?q=${req.params.keywords}&result_type=mixed&count=4`,
      '900202898608582656-LOlwKtSFTV4zTqeiAANWBBNmgaB1Tqa', //test user token
      '0DVO9OME5V9dhfL9GDo19HQLpx8xcJbRUXjeOFmfuU6E4', //test user secret
      function (e, data, respond){
        if (e) res.send(e);
        res.send(data);
      });
  })

router.post('/post', function (req, res) {
  var oauth = new OAuth.OAuth(
    'https://api.twitter.com/oauth/request_token',
    'https://api.twitter.com/oauth/access_token',
    '6n6HkiviS1oqc1aHkrMvUbwqT',
    'vFiGChSkJgL2c8TDuMz9x1BfUC62UV0n1IUfZYJ4lS7djkoWaW',
    '1.0A',
    null,
    'HMAC-SHA1'
  );
oauth.post(
  "https://api.twitter.com/1.1/statuses/update.json",
  '900202898608582656-LOlwKtSFTV4zTqeiAANWBBNmgaB1Tqa', '0DVO9OME5V9dhfL9GDo19HQLpx8xcJbRUXjeOFmfuU6E4',
  { "status" : req.body.status},
  function (e, data, respond){
    if (e) res.send(e);
    console.log('------' + data);
    res.send(data);
    });
  })


module.exports = router;
