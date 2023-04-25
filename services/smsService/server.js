//* dotenv
require('dotenv').config();

const express = require('express');

// Import the smsRoutes module
const smsRoutes = require('./routes/smsRoutes');

//* express Application
const app = express();

//middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
});

// Use the smsRoutes module
app.use('/', smsRoutes);

// Start the sms service
app.listen(
    process.env.PORT,
    process.env.HOST_NAME,
    (req, res) => {
        console.log(`SMS service is running on ${process.env.HOST_NAME}:${process.env.PORT}`);
    }
);
