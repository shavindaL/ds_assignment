//* dotenv
require('dotenv').config();

const express = require('express');
const mailRoutes  = require('./routes/mailRoutes');

//* express app
const app = express();

app.use(express.json());
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
});
app.use('/', mailRoutes);


app.listen(process.env.PORT, process.env.HOST_NAME, () => {
    console.log(`Mail service is running on ${process.env.HOST_NAME}:${process.env.PORT}`);
})
