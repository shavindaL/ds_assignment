// Import the mongoose module
const mongoose = require('mongoose');

// Define the schema for the seller
const sellerAudtTrailSchema = mongoose.Schema({
    dbName: {
        type: String,
        default: process.env.DB_NAME
    },
    user: {
        type: String,
        default: process.env.DB_USERNAME
    },
    userIPAddress: {
        type: String,
        required: true
    },
    operation: {
        type: String,
        required: true
    },
    documentID: {
        type: String,
    },
    dataBefore: {
        type: Object,
        required: true
    },
    dataAfter: {
        type: Object,
        required: true
    },
    outcome: {
        type: String,
        required: true
    },
    time: {
        type: Date,
        required: true
    }
});

// Define the model
const SellerAuditTrail = mongoose.model("seller_audit_trails", sellerAudtTrailSchema);

// Export the model
module.exports = SellerAuditTrail;