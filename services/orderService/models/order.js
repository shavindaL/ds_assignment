// Import the mongoose module
const mongoose = require('mongoose');

// Define the schema for the order
const orderSchema = mongoose.Schema({
    orderID: {
        type: String,
        required: true
    },
    customerID : {
        type : String,
        required : true
    },
    name : {
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
