//* dotenv
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

//* express app
const app = express();

//middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
});

//TODO remove this and add route to the respective service's routes folder
app.get('/', (req, res) => {
    res.status(200).send("Seller Service");
})

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
