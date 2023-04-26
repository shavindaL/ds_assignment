// Import the mongoose module
const mongoose = require('mongoose');

// Define the schema for the order
const orderSchema = mongoose.Schema({

    orderID: {
        type: String,
        unique: true,
        required: true
    },
    customerID: {
        type: Number,
        required: true
    },
    data: [

        {
            name: {
                type: String,
                required: true
            },
            quantity: {
                type: Number,
                required: true
            },
            price: {
                type: Number,
                required: true
            }
        }
    ],

    total:{
        type: Number,
        required: true
    },
    
    orderStatus: {
        type: String,
        required: true,
        default: "Pending"
    },

    orderDate: {
        type: Object,
        required: true,
        default: new Date()
    }
});

// Define the model
const Order = mongoose.model("Order", orderSchema);

// Export the model
module.exports = Order;
