'use strict';
const backupService = require('mongo3-s3-streaming-backup');

module.exports.backup = (event, context, done) => {

  backupService.backup({
    mongoUrl: process.env.mongoUrl,
    s3Bucket: process.env.s3Bucket,
    s3Prefix: process.env.s3Prefix,
    callback: function (err, data) {
      console.log(err, data);
      done(err, { message: 'Success' });
    }
  });

};
