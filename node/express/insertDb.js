var AWS = require('aws-sdk');
// Set the region
AWS.config.update({region: 'ap-south-1'});
// Create DynamoDB service object
var ddb = new AWS.DynamoDB({apiVersion: '2018-01-01'});
var params = {
  TableName: 'CUSTOMER_LIST',
  Item: {
    'custCode' : {N: '001'},
    'custName' : {S: 'Ramesh'},
  }
};

// Call DynamoDB to add the item to the table
ddb.putItem(params, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data);
  }
});