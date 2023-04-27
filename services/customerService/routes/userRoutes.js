// Import all the methods from userController
const {
    loginUser,
    signupUser,
    getUserService,
    getUser,
    getAllUsers,
    deleteuser
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

//get one user
router.get("/:id", getUser);

//delete user
router.delete("/:id",deleteuser)

//get one user
router.get("/customers/customerall",getAllUsers)



// Export the router object
module.exports = router;