//* dotenv
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

// Import multer module
const multer = require('multer');
const storage = multer.memoryStorage();

const upload = multer({
    storage: storage
});


// Import the sellerRoutes module
const sellerRoutes = require('./routes/sellerRoutes');

//* express Application
const app = express();

//middleware
app.use(express.json());

app.use(upload.single("sellerImage"));


app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
});

// Use the sellerRoutes module
app.use('/', sellerRoutes);

//* Connect to db
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {

        console.log(`Connected to the database`);

        app.listen(process.env.PORT, process.env.HOST_NAME, (req, res) => {
            console.log(`Seller service is running on ${process.env.HOST_NAME}:${process.env.PORT}`)
        });

    })
    .catch(error => {
        console.log(error);
    });
