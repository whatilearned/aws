var AWS = require('aws-sdk');
// Set the region ap-south-1
AWS.config.update({region: 'us-east-1'});
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
    }
  ],
  KeySchema: [
    {
      AttributeName: 'custCode',
      KeyType: 'HASH'
    },
    {
      AttributeName: 'custName',
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

