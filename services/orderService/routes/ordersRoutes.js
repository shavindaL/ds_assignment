// Import all the methods from orderController
const {
    getOrderService,
    addOrder,
    getOrder,
    updateOrder,
    deleteOrder
} = require('../controller/orderController');

// Import the express module
const express = require("express");

// Create new router object
const router = express.Router();

// Handle GET request at root
router.get("/", getOrderService);

// Handle POST request at "addOrder" URI
router.post("/addOrder", addOrder);

// Handle GET request at "orders/:id" URI
router.get("/orders/:id", getOrder);

// Handle PUT request at "orders/:id" URI
router.put("/orders/:id", updateOrder);

// Handle DELETE request at "orders/:id" URI
router.delete("/orders/:id", deleteOrder);

// Export the router object
module.exports = router;
