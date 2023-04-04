//* dotenv
require('dotenv').config();


const express = require('express');

const { ROUTES } = require('./routes');
const { setupProxies } = require('./proxy');


const app = express();
//* proxy
setupProxies(app, ROUTES);

app.listen(process.env.PORT, process.env.HOST_NAME, (req, res) => {
    console.log(`API gateway running on ${process.env.HOST_NAME}:${process.env.PORT}`)
});
