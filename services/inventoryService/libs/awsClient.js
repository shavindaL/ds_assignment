const { S3Client } = require("@aws-sdk/client-s3");

// Create an Amazon S3 service client object.
const s3 = new S3Client({
    credentials: {
        accessKeyId: process.env.S3_ACCESS_KEY,
        secretAccessKey: process.env.S3_SECRET_ACCESS_KEY
    },
    region: process.env.S3_BUCKET_REGION// Set the AWS Region.
});

module.exports = { s3 };
