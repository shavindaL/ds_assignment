const mongoose = require('mongoose');

const inventoryProductSchema = new mongoose.Schema({
    productId: {
        type: Number,
        unique: true,
        required: true
    },
    productName: {
        type: String,
        required: true
    },
    productDescription: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    sellerName: {
        type: String,
        required: true
    },
    packageQuantity: {
        type: Number,
        required: true
    },
    productCategory: {
        type: String,
        required: true
    },
    productWeight: {
        type: Number,
        required: true
    },
    unitsInStock: {
        type: Number
    },
    unitPrice: {
        type: Number,
        required: true
    },
},
    {
        timestamps: true
    }
);

const InventoryProduct = mongoose.model("InventoryProduct", inventoryProductSchema);

module.exports = InventoryProduct;