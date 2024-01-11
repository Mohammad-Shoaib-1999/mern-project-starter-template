const AWS = require('aws-sdk');
const connectAWS = () => {
  try {
    AWS.config.update({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    });
  } catch (error) {
    console.log(error)
  }
  };
  
  module.exports = connectAWS;
  