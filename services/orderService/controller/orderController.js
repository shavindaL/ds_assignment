const Order = require('../models/order');

const getOrderService = async (req, res) => {
    res.status(200).send("Order Service");
}

// Method to add new order
const addOrder = async (req, res) => {

    // Create new document
    const order = new Order({
        orderID: req.body.orderID,
        customerName: req.body.customerName,
        address: req.body.address,
        quantity: req.body.quantity,
        price: req.body.price
        
    });

    try {

        // Insert the new document
        await order.save();

        // Respond with status code 201 (Created) if successful
        res.status(201).send("Order added successfully");

    } catch (err) {

        // Respond with status code 400 (Bad Request) if unsuccessful
        res.status(400).send("Failed to add the order");

        // Print the error message
        console.log(err.message);
    }

};

// Method to get details of a particular order
const getOrder = async (req, res) => {

    try {

        // Find the particular document
        const order = await Order.findOne({ orderID: req.params.id });

        // Respond with status code 200 (OK) if successful
        res.status(200).send(order);

    } catch (err) {

        // Respond with status code 400 (Bad Request) if unsuccessful
        res.status(400).send("Failed to find oreder");

        // Print the error message
        console.log(err.message);
    }

};


// Method to update details of a particular order
const updateOrder = async (req, res) => {

    try {

        // Update the particular document with the new data
        // Encrypt sensitive data
        await Order.findOneAndUpdate(
            {
                orderID:
                    req.params.id
            },
            {
                $set:
                {
                    customerName: req.body.customerName,
                    address: req.body.address,
                    quantity: req.body.quantity,
                    price: req.body.price
                    
                }
            }
        );

        // Respond with status code 200 (OK) if successful
        res.status(200).send("Order updated successfully");

    } catch (err) {

        // Respond with status code 400 (Bad Request) if unsuccessful
        res.status(400).send("Failed to update order");

        // Print the error message
        console.log(err.message);
    }
};


// Method to delete a particular order
const deleteOrder = async (req, res) => {

    try {

        await Order.findOneAndDelete({ orderID: req.params.id })

        // Respond with status code 200 (OK) if successful
        res.status(200).send("Order deleted successfully");

    } catch (err) {

        // Respond with status code 400 (Bad Request) if unsuccessful      
        res.status(400).send("Failed to delete order");

        // Print the error message
        console.log(err.message);

    }
};

//* export all the functions
module.exports = {
    getOrderService,
    addOrder,
    getOrder,
    updateOrder,
    deleteOrder
}