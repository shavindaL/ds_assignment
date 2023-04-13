// Import all the methods from sellerController
const {
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

// Handle POST request at "v1/addSeller" URI
router.post("/v1/addSeller", addSeller);

// Handle GET request at "v1/sellers/:id" URI
router.get("/v1/sellers/:id", getSeller);

// Handle PUT request at "v1/sellers/:id" URI
router.put("/v1/sellers/:id", updateSeller);

// Handle DELETE request at "v1/sellers/:id" URI
router.delete("/v1/sellers/:id", deleteSeller);

//Handle PATCH request at "/v1/sellers/:id/uploadPhoto" URI
router.patch("/v1/sellers/updatePhoto/:id", updatePhoto);

// Export the router object
module.exports = router;