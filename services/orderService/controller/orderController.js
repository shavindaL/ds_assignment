const Order = require('../models/order');

const getOrder = async (req, res) => {
    res.status(200).send("Order Service");
}

//* export all the functions
module.exports = {
    getOrder
}