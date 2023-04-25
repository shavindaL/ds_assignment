// Import all the methods from smsController
const {
    getSMSService,
    sendSMS
} = require('../controller/smsController');

// Import the express module
const express = require("express");

// Create new router object
const router = express.Router();

// Method to handle GET request at root
router.get("/", getSMSService);

// Method to handle POST request at "/sendSMS" URI
router.post("/sendSMS", sendSMS)

// Export the router object
module.exports = router;