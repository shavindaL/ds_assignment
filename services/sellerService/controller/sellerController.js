// Import the Seller model
const Seller = require("../models/seller");

// Import the SellerAuditTrail model
const SellerAuditTrail = require("../models/sellerAuditTrail");

// Import the node-encryption module
// This module is based on the "aes-256-gcm" algorithm
const { encrypt, decrypt } = require("node-encryption");

// Import the fs module
const fs = require("fs");

// Import the googleapis module
const { google } = require("googleapis");

// Import stream module
const stream = require("stream");

const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

//login seller
const loginSeller = async (req, res) => {
  const { email, password } = req.body;

  try {
    const seller = await Seller.login(email, password)
      
    let abc = await Seller.findOne({_id: seller._id}, {_id: 1})
    let sellerid = await abc._id

    console.log(sellerid)
    console.log(typeof(sellerid))

        // create a token
        const token = createToken(sellerid);

        console.log("token",token)

        res.status(200).json({ email, token });
     
      
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Method to get seller service
const getSellerService = async (req, res) => {
  res.status(200).send("Seller Service");
};

// Method to add new seller
const addSeller = async (req, res) => {
  try {
    // Fetch all the emails from the existing documents
    const existingEmails = await Seller.distinct("email");

    // Boolean variable to check if the seller with the given email already exists
    let isSellerExists = false;

    // Loop through the array
    for (let i = 0; i < existingEmails.length; i++) {
      // Check if email is matching after decrypting
      if (
        decrypt(existingEmails[i], process.env.ENCRYPTION_KEY).toString() ===
        req.body.email
      ) {
        isSellerExists = true;
      }
    }

    if (isSellerExists === true) {
      // Respond with status code 400 (Bad Request) if seller exists
      res.status(400).send("Sorry, this email is already taken");

      // Insert an audit log document
      new SellerAuditTrail({
        userIPAddress: req.socket.remoteAddress,
        operation: "create",
        documentID: "",
        dataBefore: "",
        dataAfter: "",
        outcome: "failure",
        time: new Date().toLocaleDateString(),
      }).save();
    } else {
      // Variable to hold the no.of documents currently existing in the collection
      let documentCount = await Seller.estimatedDocumentCount();

      // Create new document if isSellerExists variable is false
      // Sensitive data is encrypted
      const seller = new Seller({
        sellerID: documentCount + 1,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phoneNumber: encrypt(req.body.phoneNumber, process.env.ENCRYPTION_KEY),
        shopName: req.body.shopName,
        email: encrypt(req.body.email, process.env.ENCRYPTION_KEY),
        password: encrypt(req.body.password, process.env.ENCRYPTION_KEY),
      });

      // Insert the new document
      const newSeller = await seller.save();

      if (newSeller) {
        // Respond with status code 201 (Created) if successful
        res.status(201).send("Seller added successfully");

        // Decrypt sensitive data
        newSeller.phoneNumber = decrypt(
          newSeller.phoneNumber,
          process.env.ENCRYPTION_KEY
        );
        newSeller.email = decrypt(newSeller.email, process.env.ENCRYPTION_KEY);
        newSeller.password = decrypt(
          newSeller.password,
          process.env.ENCRYPTION_KEY
        );

        // Insert an audit log document
        new SellerAuditTrail({
          userIPAddress: req.socket.remoteAddress,
          operation: "create",
          documentID: newSeller._id,
          dataBefore: "",
          dataAfter: newSeller,
          outcome: "success",
          time: new Date().toLocaleDateString(),
        }).save();
      } else {
        // Respond with status code 400 (Bad Request) if unsuccessful
        res.status(400).send("Failed to add the seller");

        // Insert an audit log document
        new SellerAuditTrail({
          userIPAddress: req.socket.remoteAddress,
          operation: "create",
          documentID: "",
          dataBefore: "",
          dataAfter: "",
          outcome: "failure",
          time: new Date().toLocaleDateString(),
        }).save();
      }
    }
  } catch (err) {
    // Print the error message
    console.log(err.message);
  }
};

// Method to get all existing sellers
const getSellers = async (req, res) => {
  try {
    // Get all existing documents from sellers collection
    const sellers = await Seller.find();

    if (sellers) {
      // Loop through the array and decrypt already encrypted details
      for (let seller of sellers) {
        seller.phoneNumber = decrypt(
          seller.phoneNumber,
          process.env.ENCRYPTION_KEY
        );
        seller.email = decrypt(seller.email, process.env.ENCRYPTION_KEY);
        seller.password = decrypt(seller.password, process.env.ENCRYPTION_KEY);
      }

      // Respond with status code 200 (OK) if successful
      res.status(200).send(sellers);

      // Insert an audit log document
      new SellerAuditTrail({
        userIPAddress: req.socket.remoteAddress,
        operation: "read",
        documentID: "",
        dataBefore: sellers,
        dataAfter: sellers,
        outcome: "success",
        time: new Date().toLocaleDateString(),
      }).save();
    } else {
      // Respond with status code 400 (Bad Request) if unsuccessful
      res.status(400).send("Failed to get sellers");

      // Insert an audit log document
      new SellerAuditTrail({
        userIPAddress: req.socket.remoteAddress,
        operation: "read",
        documentID: "",
        dataBefore: "",
        dataAfter: "",
        outcome: "failure",
        time: new Date().toLocaleDateString(),
      }).save();
    }
  } catch (err) {
    // Print error message
    console.log(err.message);
  }
};

// Method to get details of a particular seller
const getSeller = async (req, res) => {
  try {
    // Find the particular document
    const seller = await Seller.findOne({ sellerID: req.params.id });

    if (seller) {
      // Decrypt already encrypted details
      seller.phoneNumber = decrypt(
        seller.phoneNumber,
        process.env.ENCRYPTION_KEY
      );
      seller.email = decrypt(seller.email, process.env.ENCRYPTION_KEY);
      seller.password = decrypt(seller.password, process.env.ENCRYPTION_KEY);

      // Respond with status code 200 (OK) if successful
      res.status(200).send(seller);

      // Insert an audit log document
      new SellerAuditTrail({
        userIPAddress: req.socket.remoteAddress,
        operation: "read",
        documentID: seller._id,
        dataBefore: seller,
        dataAfter: seller,
        outcome: "success",
        time: new Date().toLocaleDateString(),
      }).save();
    } else {
      // Respond with status code 400 (Bad Request) if unsuccessful
      res.status(400).send("Failed to find seller");

      // Insert an audit log document
      new SellerAuditTrail({
        userIPAddress: req.socket.remoteAddress,
        operation: "read",
        documentID: "",
        dataBefore: "",
        dataAfter: "",
        outcome: "failure",
        time: new Date().toLocaleDateString(),
      }).save();
    }
  } catch (err) {
    // Print the error message
    console.log(err.message);
  }
};

// Method to update details of a particular seller
const updateSeller = async (req, res) => {
  try {
    // Fetch all the emails from the existing documents
    const existingEmails = await Seller.distinct("email");

    // Boolean variable to check if the seller with the given email already exists
    let isSellerExists;

    let tempSeller;

    // Loop through the array
    for (let i = 0; i < existingEmails.length; i++) {
      // Check if email is matching after decrypting
      if (
        decrypt(existingEmails[i], process.env.ENCRYPTION_KEY).toString() ===
        req.body.email
      ) {
        // Get sellerID object that matches email
        let existingSellerIDObj = await Seller.findOne(
          { email: existingEmails[i] },
          { sellerID: 1, _id: 0 }
        );

        // Get the sellerID value from the object
        let existingSellerID = existingSellerIDObj.sellerID;

        if (existingSellerID == req.params.id) {
          // isSellerExists = false if existingSellerID is the same as req.params.id
          isSellerExists = false;
        } else {
          // isSellerExists = true otherwise
          isSellerExists = true;
        }
      }
    }

    if (isSellerExists === true) {
      tempSeller = await Seller.findOne({ sellerID: req.params.id });

      // Decrypt already encrypted details
      tempSeller.phoneNumber = decrypt(
        tempSeller.phoneNumber,
        process.env.ENCRYPTION_KEY
      );
      tempSeller.email = decrypt(tempSeller.email, process.env.ENCRYPTION_KEY);
      tempSeller.password = decrypt(
        tempSeller.password,
        process.env.ENCRYPTION_KEY
      );

      // Insert an audit log document
      new SellerAuditTrail({
        userIPAddress: req.socket.remoteAddress,
        operation: "update",
        documentID: tempSeller._id,
        dataBefore: tempSeller,
        dataAfter: tempSeller,
        outcome: "failure",
        time: new Date().toLocaleDateString(),
      }).save();

      // Respond with status code 400 (Bad Request) if seller exists
      res.status(400).send("Sorry, this email is already taken");
    } else {
      // Get previous details of the seller
      tempSeller = await Seller.findOne({ sellerID: req.params.id });

      // Update the particular document with the new data
      // Encrypt sensitive data
      const updatedSeller = await Seller.findOneAndUpdate(
        {
          sellerID: req.params.id,
        },
        {
          $set: {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            phoneNumber: encrypt(
              req.body.phoneNumber,
              process.env.ENCRYPTION_KEY
            ),
            shopName: req.body.shopName,
            email: encrypt(req.body.email, process.env.ENCRYPTION_KEY),
            password: encrypt(req.body.password, process.env.ENCRYPTION_KEY),
          },
        },
        {
          new: true,
        }
      );

      if (updatedSeller) {
        // Respond with status code 200 (OK) if successful
        res.status(200).send("Seller updated successfully");

        // Decrypt already encrypted details
        tempSeller.phoneNumber = decrypt(
          tempSeller.phoneNumber,
          process.env.ENCRYPTION_KEY
        );
        tempSeller.email = decrypt(
          tempSeller.email,
          process.env.ENCRYPTION_KEY
        );
        tempSeller.password = decrypt(
          tempSeller.password,
          process.env.ENCRYPTION_KEY
        );

        // Decrypt already encrypted details
        updatedSeller.phoneNumber = decrypt(
          updatedSeller.phoneNumber,
          process.env.ENCRYPTION_KEY
        );
        updatedSeller.email = decrypt(
          updatedSeller.email,
          process.env.ENCRYPTION_KEY
        );
        updatedSeller.password = decrypt(
          updatedSeller.password,
          process.env.ENCRYPTION_KEY
        );

        // Insert an audit log document
        new SellerAuditTrail({
          userIPAddress: req.socket.remoteAddress,
          operation: "update",
          documentID: tempSeller._id,
          dataBefore: tempSeller,
          dataAfter: updatedSeller,
          outcome: "success",
          time: new Date().toLocaleDateString(),
        }).save();
      } else {
        // Respond with status code 400 (Bad Request) if unsuccessful
        res.status(400).send("Failed to update seller");

        // Decrypt already encrypted details
        tempSeller.phoneNumber = decrypt(
          tempSeller.phoneNumber,
          process.env.ENCRYPTION_KEY
        );
        tempSeller.email = decrypt(
          tempSeller.email,
          process.env.ENCRYPTION_KEY
        );
        tempSeller.password = decrypt(
          tempSeller.password,
          process.env.ENCRYPTION_KEY
        );

        // Insert an audit log document
        new SellerAuditTrail({
          userIPAddress: req.socket.remoteAddress,
          operation: "update",
          documentID: tempSeller._id,
          dataBefore: tempSeller,
          dataAfter: tempSeller,
          outcome: "failure",
          time: new Date().toLocaleDateString(),
        }).save();
      }
    }
  } catch (err) {
    // Print the error message
    console.log(err.message);
  }
};

// Method to delete a particular seller
const deleteSeller = async (req, res) => {
  try {
    const deletedSeller = await Seller.findOneAndDelete({
      sellerID: req.params.id,
    });

    if (deletedSeller) {
      // Respond with status code 200 (OK) if successful
      res.status(200).send("Seller deleted successfully");

      // Decrypt already encrypted details
      deletedSeller.phoneNumber = decrypt(
        deletedSeller.phoneNumber,
        process.env.ENCRYPTION_KEY
      );
      deletedSeller.email = decrypt(
        deletedSeller.email,
        process.env.ENCRYPTION_KEY
      );
      deletedSeller.password = decrypt(
        deletedSeller.password,
        process.env.ENCRYPTION_KEY
      );

      // Insert an audit log document
      new SellerAuditTrail({
        userIPAddress: req.socket.remoteAddress,
        operation: "delete",
        documentID: deletedSeller._id,
        dataBefore: deletedSeller,
        dataAfter: "",
        outcome: "success",
        time: new Date().toLocaleDateString(),
      }).save();
    } else {
      // Respond with status code 400 (Bad Request) if unsuccessful
      res.status(400).send("Failed to delete seller");

      let tempSeller = await Seller.findOne({ sellerID: req.params.id });

      // Decrypt already encrypted details
      tempSeller.phoneNumber = decrypt(
        tempSeller.phoneNumber,
        process.env.ENCRYPTION_KEY
      );
      tempSeller.email = decrypt(tempSeller.email, process.env.ENCRYPTION_KEY);
      tempSeller.password = decrypt(
        tempSeller.password,
        process.env.ENCRYPTION_KEY
      );

      // Insert an audit log document
      new SellerAuditTrail({
        userIPAddress: req.socket.remoteAddress,
        operation: "delete",
        documentID: tempSeller._id,
        dataBefore: tempSeller,
        dataAfter: tempSeller,
        outcome: "failure",
        time: new Date().toLocaleDateString(),
      }).save();
    }
  } catch (err) {
    // Print the error message
    console.log(err.message);
  }
};

//Method to upload a photo for the seller
const updatePhoto = async (req, res) => {
  try {
    // Invoke the uploadPhoto() method
    const photoID = await uploadPhoto(req);

    if (photoID) {
      // Print the id for the newly uploaded image
      console.log(photoID);

      // Get details of the seller to which the photo will be updated
      const tempSeller = await Seller.findOne({ sellerID: req.params.id });

      // Update the particular seller's photo
      const updatedSeller = await Seller.findOneAndUpdate(
        {
          sellerID: req.params.id,
        },
        {
          $set: {
            photo: `https://drive.google.com/uc?export=view&id=${photoID}`,
          },
        },
        {
          new: true,
        }
      );

      if (updatedSeller) {
        // Respond with status code 200 (OK) if successful
        res.status(200).send("Successfully uploaded the image for seller");

        // Decrypt already encrypted details
        updatedSeller.phoneNumber = decrypt(
          updatedSeller.phoneNumber,
          process.env.ENCRYPTION_KEY
        );
        updatedSeller.email = decrypt(
          updatedSeller.email,
          process.env.ENCRYPTION_KEY
        );
        updatedSeller.password = decrypt(
          updatedSeller.password,
          process.env.ENCRYPTION_KEY
        );

        // Decrypt already encrypted details
        tempSeller.phoneNumber = decrypt(
          tempSeller.phoneNumber,
          process.env.ENCRYPTION_KEY
        );
        tempSeller.email = decrypt(
          tempSeller.email,
          process.env.ENCRYPTION_KEY
        );
        tempSeller.password = decrypt(
          tempSeller.password,
          process.env.ENCRYPTION_KEY
        );

        // Insert an audit log document
        new SellerAuditTrail({
          userIPAddress: req.socket.remoteAddress,
          operation: "update",
          documentID: updatedSeller._id,
          dataBefore: tempSeller,
          dataAfter: updatedSeller,
          outcome: "success",
          time: new Date().toLocaleDateString(),
        }).save();
      } else {
        // Respond with status code 400 (Bad Request) if unsuccessful
        res.status(400).send("Failed to upload the image for seller");

        // Decrypt already encrypted details
        tempSeller.phoneNumber = decrypt(
          tempSeller.phoneNumber,
          process.env.ENCRYPTION_KEY
        );
        tempSeller.email = decrypt(
          tempSeller.email,
          process.env.ENCRYPTION_KEY
        );
        tempSeller.password = decrypt(
          tempSeller.password,
          process.env.ENCRYPTION_KEY
        );

        // Insert an audit log document
        new SellerAuditTrail({
          userIPAddress: req.socket.remoteAddress,
          operation: "update",
          documentID: tempSeller._id,
          dataBefore: tempSeller,
          dataAfter: tempSeller,
          outcome: "failure",
          time: new Date().toLocaleDateString(),
        }).save();
      }
    } else {
      // Respond with status code 400 (Bad Request) if unsuccessful
      res.status(400).send("Failed to upload the image to cloud");

      // Decrypt already encrypted details
      tempSeller.phoneNumber = decrypt(
        tempSeller.phoneNumber,
        process.env.ENCRYPTION_KEY
      );
      tempSeller.email = decrypt(tempSeller.email, process.env.ENCRYPTION_KEY);
      tempSeller.password = decrypt(
        tempSeller.password,
        process.env.ENCRYPTION_KEY
      );

      // Insert an audit log document
      new SellerAuditTrail({
        userIPAddress: req.socket.remoteAddress,
        operation: "update",
        documentID: tempSeller._id,
        dataBefore: tempSeller,
        dataAfter: tempSeller,
        outcome: "failure",
        time: new Date().toLocaleDateString(),
      }).save();
    }
  } catch (err) {
    // Print the error message
    console.log(err.message);
  }
};

// Method to upload the desired photo to google drive
const uploadPhoto = async (req) => {
  try {
    // Assign file object to variable
    const fileObject = req.file;

    const bufferStream = new stream.PassThrough();

    bufferStream.end(fileObject.buffer);

    // Google authentication
    const auth = new google.auth.GoogleAuth({
      keyFile: "../sellerService/googlekey.json",
      scopes: ["https://www.googleapis.com/auth/drive"],
    });

    // Google drive service
    const driveService = google.drive({
      version: "v3",
      auth,
    });

    // Define the metadata required
    const fileMetaData = {
      name: Date.now(),
      parents: [process.env.GOOGLE_API_FOLDER_ID],
    };

    // Define the media parameters for the file
    const media = {
      mimeType: "image/*",
      body: bufferStream,
    };

    // Get the response from the driveService
    const response = await driveService.files.create({
      resource: fileMetaData,
      media: media,
      field: "id",
    });

    // Return the id associated with the uploaded file
    return response.data.id;
  } catch (err) {
    // Print error message
    console.log(err.message);
  }
};

// Export all the methods
module.exports = {
  loginSeller,
  getSellers,
  getSellerService,
  addSeller,
  getSeller,
  updateSeller,
  deleteSeller,
  updatePhoto,
};
