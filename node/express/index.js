var AWS = require('aws-sdk');
// Set the region
AWS.config.update({region: 'ap-south-1'});
// Create DynamoDB service object
var ddb = new AWS.DynamoDB({apiVersion: '2018-01-01'});

var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var port = process.env.PORT || 8080;        // set our port

var router = express.Router();              // get an instance of the express Router
router.get('/', function(req, res) {
        console.log('Magic happens on router.get(/');
    res.json({ message: 'hooray! welcome to our api!' });
});
router.get('/ramesh', function(req, res) {
 console.log('Magic happens on router.get(/ramesh');
    res.json({ message: 'hooray! welcome to our api!' });
});
app.post('/cst', function (req, res) {
       console.log(req.body);
       var dt=req.body;
       var params = {
         TableName: 'CUSTOMER_LIST',
         Item:
         { "custCode":{'N' ,dt.custCode},
         "custName": {'S' ,dt.custName},
         "custAddr": {'S' ,dt.custAddr},
          "custPhone": {'S' ,dt.custPhone},
           "custEmail": {'S' ,dt.custEmail},
            "custId": {'S' ,dt.custId} }

       };
       ddb.putItem(params, function(err, data) {
         if (err) {
           console.log("Error", err);
         } else {
           console.log("Success", data);
         }
       });
      res.send('Cst post homepage')
})
app.use(express.static(__dirname+'/public'));
app.use('/api', router);
app.listen(port);
console.log('Magic happens on port ' + port);

