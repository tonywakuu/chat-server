const AWS = require('aws-sdk');

const endpoint = process.env.SERVERLESS_SIMULATE
  ? process.env.SERVERLESS_SIMULATE_LAMBDA_ENDPOINT
  : undefined;

const lambda = new AWS.Lambda({ region: 'us-east-1', endpoint });

module.exports.handler = (event, context, callback) => {
  const params = {
    FunctionName: 'some-function-name',
    Payload: JSON.stringify({ msg: 'Hello, world!' }),
  };

  lambda.invoke(params, (err, res) => {
    console.log(err ? err : JSON.parse(res.Payload).message);

    return callback(null, { message: 'Your function executed successfully!' });
  })
};