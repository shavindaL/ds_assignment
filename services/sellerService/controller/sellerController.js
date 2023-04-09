// Import the Seller model
const Seller = require('../models/seller');

// Import the node-encryption module
// This module is based on the "aes-256-gcm" algorithm
const { encrypt, decrypt } = require('node-encryption');

// Method to get seller service
const getSellerService = async (req, res) => {
    res.status(200).send("Seller Service");
}

// Method to add new seller
const addSeller = async (req, res) => {

    // Create new document
    // Sensitive data is encrypted
    const seller = new Seller({
        sellerID: req.body.sellerID,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phoneNumber: encrypt(req.body.phoneNumber, process.env.ENCRYPTION_KEY),
        shopName: req.body.shopName,
        email: encrypt(req.body.email, process.env.ENCRYPTION_KEY),
        password: encrypt(req.body.password, process.env.ENCRYPTION_KEY)
    });

    try {

        // Insert the new document
        await seller.save();

        // Respond with status code 201 (Created) if successful
        res.status(201).send("Seller added successfully");

    } catch (err) {

        // Respond with status code 400 (Bad Request) if unsuccessful
        res.status(400).send("Failed to add the seller");

        // Print the error message
        console.log(err.message);
    }

};

// Method to get details of a particular seller
const getSeller = async (req, res) => {

    try {

        // Find the particular document
        const seller = await Seller.findOne({ sellerID: req.params.id });

        // Decrypt already encrypted details
        seller.phoneNumber = decrypt(seller.phoneNumber, process.env.ENCRYPTION_KEY);
        seller.email = decrypt(seller.email, process.env.ENCRYPTION_KEY);
        seller.password = decrypt(seller.password, process.env.ENCRYPTION_KEY);

        // Respond with status code 200 (OK) if successful
        res.status(200).send(seller);

    } catch (err) {

        // Respond with status code 400 (Bad Request) if unsuccessful
        res.status(400).send("Failed to find seller");

        // Print the error message
        console.log(err.message);
    }

};


// Method to update details of a particular seller
const updateSeller = async (req, res) => {

    try {

        // Update the particular document with the new data
        // Encrypt sensitive data
        await Seller.findOneAndUpdate(
            {
                sellerID:
                    req.params.id
            },
            {
                $set:
                {
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    phoneNumber: encrypt(req.body.phoneNumber, process.env.ENCRYPTION_KEY),
                    shopName: req.body.shopName,
                    email: encrypt(req.body.email,process.env.ENCRYPTION_KEY),
                    password: encrypt(req.body.password,process.env.ENCRYPTION_KEY)
                }
            }
        );

        // Respond with status code 200 (OK) if successful
        res.status(200).send("Seller updated successfully");

    } catch (err) {

        // Respond with status code 400 (Bad Request) if unsuccessful
        res.status(400).send("Failed to update seller");

        // Print the error message
        console.log(err.message);
    }
};


// Method to delete a particular seller
const deleteSeller = async (req, res) => {

    try {

        await Seller.findOneAndDelete({ sellerID: req.params.id })

        // Respond with status code 200 (OK) if successful
        res.status(200).send("Seller deleted successfully");

    } catch (err) {

        // Respond with status code 400 (Bad Request) if unsuccessful      
        res.status(400).send("Failed to delete seller");

        // Print the error message
        console.log(err.message);

    }
};



// Export all the methods
module.exports = {
    getSellerService,
    addSeller,
    getSeller,
    updateSeller,
    deleteSeller
}