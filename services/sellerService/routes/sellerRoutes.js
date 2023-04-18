// Import all the methods from sellerController
const {
    getSellers,
    getSellerService,
    addSeller,
    getSeller,
    updateSeller,
    deleteSeller,
    updatePhoto
} = require('../controller/sellerController');

// Import the express module
const express = require("express");

// Create new router object
const router = express.Router();

// Handle GET request at root
router.get("/", getSellerService);

// Handle POST request at "/addSeller" URI
router.post("/addSeller", addSeller);

// Handle GET request at "/sellers" URI
router.get("/sellers", getSellers);

// Handle GET request at "/:id" URI
router.get("/:id", getSeller);

// Handle PUT request at "/:id" URI
router.put("/:id", updateSeller);

// Handle DELETE request at "/:id" URI
router.delete("/:id", deleteSeller);

//Handle POST request at "/updatePhoto/:id" URI
router.post("/updatePhoto/:id", updatePhoto);

// Export the router object
module.exports = router;