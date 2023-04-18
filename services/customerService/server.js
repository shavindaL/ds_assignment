//* dotenv
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

// Import the sellerRoutes module
const userRoutes = require('./routes/userRoutes');


//* express app
const app = express();

//* middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
});

app.use("/",userRoutes)


//* Connect to db
mongoose
    .connect(process.env.MONGO_URI , {dbName:"User"})
    .then(() => {

        console.log(`Connected to the database`);

        app.listen(process.env.PORT, process.env.HOST_NAME, (req, res) => {
            console.log(`Customer service is running on ${process.env.HOST_NAME}:${process.env.PORT}`)
        });

    })
    .catch(error => {
        console.log(error);
    });
