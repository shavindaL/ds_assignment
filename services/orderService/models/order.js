// Import the mongoose module
const mongoose = require('mongoose');

// Define the schema for the seller
const orderSchema = mongoose.Schema({
    orderID: {
        type: Number,
        required: true
    },
    customerName : {
        type : String,
        required : true
    },
    address : {
        type : String,
        required : true
    },
    quantity : {
        type : Number,
        required : true
    },
    price : {
        type : Number,
        required : true
    }
});

// Define the model
const Order = mongoose.model("Order", orderSchema);

// Export the model
module.exports = Order;
