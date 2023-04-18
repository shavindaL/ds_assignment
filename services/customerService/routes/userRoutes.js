// Import all the methods from userController
const {
    loginUser,
    signupUser,
    getUserService
} = require('../controller/userContrller');

// Import the express module
const express = require("express");

// Create new router object
const router = express.Router();



//login user
router.post("/login", loginUser);

//signup user
router.post("/signup", signupUser);



// Handle GET request at root
router.get("/", getUserService);



// Export the router object
module.exports = router;