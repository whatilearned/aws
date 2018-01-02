var AWS = require('aws-sdk');
// Set the region
AWS.config.update({region: 'ap-south-1'});
// Create DynamoDB service object
var ddb = new AWS.DynamoDB({apiVersion: '2018-01-01'});

var params = {
  AttributeDefinitions: [
    {
      AttributeName: 'custCode',
      AttributeType: 'N'
    },
    {
      AttributeName: 'custName',
      AttributeType: 'S'
    },
        {
                     AttributeName: 'custAddr',
                     AttributeType: 'S'
        },
       {
                 AttributeName: 'custPhone',
                 AttributeType: 'S'
       },
       {
                 AttributeName: 'custEmail',
                 AttributeType: 'S'
       },
       {
                 AttributeName: 'custId',
                 AttributeType: 'S'
       }
  ],
  KeySchema: [
    {
      AttributeName: 'custId',
      KeyType: 'HASH'
    },
    {
      AttributeName: 'custName',
      KeyType: 'RANGE'
    },
    {
    AttributeName: 'custAddr',
    KeyType: 'RANGE'
    },
    {
    AttributeName: 'custPhone',
    KeyType: 'RANGE'
    },
    {
    AttributeName: 'custEmail',
    KeyType: 'RANGE'
    },
    {
     AttributeName: 'custId',
     KeyType: 'RANGE'
    }
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 1,
    WriteCapacityUnits: 1
  },
  TableName: 'CUSTOMER_LIST',
  StreamSpecification: {
    StreamEnabled: false
  }
};

ddb.createTable(params, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Table Created", data);
  }
});
//var params = {
//  TableName: 'CUSTOMER_LIST',
//  Item: {
//    'custId' : {N: '001'},
//    'custName' : {S: 'Ramesh'},
//    'custAddr' : {S: 'Hyderabad,India'},
//    'custPhone' : {S: '989898989'},
//    'custEmail' : {S: 'alluri.ramesh@gmail.com'},
//    'custId' : {S: 'AADHAR'},
//  }
//};
//
//// Call DynamoDB to add the item to the table
//ddb.putItem(params, function(err, data) {
//  if (err) {
//    console.log("Error", err);
//  } else {
//    console.log("Success", data);
//  }
//});
//var params = {
//  TableName: 'CUSTOMER_LIST',
//  Item: {
//    'custId' : {N: '002'},
//    'custName' : {S: 'Raju'},
//    'custAddr' : {S: 'Hyderabad,India'},
//    'custPhone' : {S: '9892244589'},
//    'custEmail' : {S: 'alluri.ramesh@gmail.com'},
//    'custId' : {S: 'AADHAR'},
//  }
//};
//
//// Call DynamoDB to add the item to the table
//ddb.putItem(params, function(err, data) {
//  if (err) {
//    console.log("Error", err);
//  } else {
//    console.log("Success", data);
//  }
//});
//var params = {
//  TableName: 'CUSTOMER_LIST',
//  Item: {
//    'custId' : {N: '003'},
//    'custName' : {S: 'Alluri'},
//    'custAddr' : {S: 'Hyderabad,India'},
//    'custPhone' : {S: '989822989'},
//    'custEmail' : {S: 'alluri.ramesh@gmail.com'},
//    'custId' : {S: 'AADHAR'},
//  }
//};
//
//// Call DynamoDB to add the item to the table
//ddb.putItem(params, function(err, data) {
//  if (err) {
//    console.log("Error", err);
//  } else {
//    console.log("Success", data);
//  }
//});