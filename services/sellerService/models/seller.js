// Import the mongoose module
const mongoose = require('mongoose');

// Define the schema for the seller
const sellerSchema = mongoose.Schema({
    sellerID: {
        type: Number,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    shopName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
});

// Define the model
const Seller = mongoose.model("Seller", sellerSchema);

// Export the model
module.exports = Seller;