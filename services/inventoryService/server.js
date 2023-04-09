//* dotenv
require('dotenv').config();

const express = require('express');
const { dbConnect } = require('./utils/dbConnect');
const inventoryRoutes = require('./routes/inventoryRoutes');


//* express app
const app = express();

//middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
});

app.use('/', inventoryRoutes);

app.listen(process.env.PORT, process.env.HOST_NAME, (req, res) => {
    //Connect to db
    dbConnect();
    console.log(`Order service is running on ${process.env.HOST_NAME}:${process.env.PORT}`);
});
