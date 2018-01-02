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


app.use('/api', router);
app.listen(port);
console.log('Magic happens on port ' + port);

