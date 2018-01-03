var AWS = require('aws-sdk');
// Set the region
AWS.config.update({region: 'us-east-1'});

// Create sendEmail params
var params = {
  Destination: { /* required */
    CcAddresses: [
      'alluri.ramesh@hotmail.com',
      /* more items */
    ],
    ToAddresses: [
      'ramshraju.alluri@syniverse.com',
      /* more items */
    ]
  },
  Message: { /* required */
    Body: { /* required */
      Html: {
       Charset: "UTF-8",
       Data: "HTML_FORMAT_BODY"
      },
      Text: {
       Charset: "UTF-8",
       Data: "TEXT_FORMAT_BODY"
      }
     },
     Subject: {
      Charset: 'UTF-8',
      Data: 'Thank you for Subscribing our service'
     }
    },_
  Source: 'alluri.ramesh@gmail.com', /* required */
  ReplyToAddresses: [
     'alluri.ramesh@gmail.com',
    /* more items */
  ],
};

// Create the promise and SES service object
var sendPromise = new AWS.SES({apiVersion: '2018-01-03'}).sendEmail(params).promise();

// Handle promise's fulfilled/rejected states
sendPromise.then(
  function(data) {
    console.log(data.MessageId);
  }).catch(
    function(err) {
    console.error(err, err.stack);
});