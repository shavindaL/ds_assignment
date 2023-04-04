const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    customerName : {
        type : String,
        required : true
    },
    address : {
        type : String,
        required : true
    }
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
