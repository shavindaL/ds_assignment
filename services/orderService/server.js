//* dotenv
require('dotenv').config();

const express = require('express')
const mongoose = require('mongoose');
const orderRoutes = require('./routes/ordersRoutes');

//* express Application
const app = express();

//*middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
});

app.use('/', orderRoutes);

//* Connect to db
mongoose
    .connect(process.env.MONGO_URI, {dbName:"orderDB"}) // dbname
    .then(() => {

        console.log(`Connected to the database`);

        app.listen(process.env.PORT, process.env.HOST_NAME, (req, res) => {
            console.log(`Order service is running on ${process.env.HOST_NAME}:${process.env.PORT}`);
        });

    })
    .catch(error => {
        console.log(error);
    });
