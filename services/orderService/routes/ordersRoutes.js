// Import all the methods from orderController
const {
    getOrderService,
    getOrders,
    addOrder,
    getOrder,
    updateOrder,
    deleteOrder,
    myallorders
} = require('../controller/orderController');

// Import the express module
const express = require("express");

// Create new router object
const router = express.Router();

// Handle GET request at root
// router.get("/", getOrderService);

// Handle GET request at "/" URI
router.get("/", getOrders);

// Handle POST request at "/addOrder" URI
router.post("/addOrder", addOrder);

// Handle GET request at "/:id" URI
router.get("/:id", getOrder);

// Handle PUT request at "/:id" URI
router.put("/:id", updateOrder);

// Handle DELETE request at "/:id" URI
router.delete("/:id", deleteOrder);


//get my all orders
router.get("/myorders/list/:id",myallorders);

// Export the router object
module.exports = router;
