const axios = require('axios').default;



//* inventory product model
const InventoryProduct = require('../models/inventoryProduct');


//* get all items from the inventory
const getInventoryItems = async (req, res) => {
    InventoryProduct
        .find()
        .then(products => { res.status(200).json(products) })
        .catch(err => res.status(400).send({ error: err }));
}

//* get a specific item from the inventory
const getInventoryItem = async (req, res) => {
    InventoryProduct
        .findOne({ productId: req.params.id })
        .then(product => { res.status(200).json(product) })
        .catch(err => res.status(400).send({ error: err }));
}

//* add a new item to inventory
const addInventoryItem = async (req, res) => {

    const msgTemplate = `<!DOCTYPE html><html><head><title>New Product Created</title><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head><body style="font-family: Arial, sans-serif; font-size: 14px; line-height: 1.5; color: #333;"><table style="width: 100%; max-width: 600px; margin: 0 auto; border-collapse: collapse; border-spacing: 0;"><tbody><tr><td style="background-color: #f5f5f5; padding: 20px;"><h1 style="margin: 0;">New Product Created</h1></td></tr><tr><td style="padding: 20px;"><p>Dear Seller,</p><p>We are pleased to inform you that a new product has been created on our platform. Please find the details of the product below:</p><table style="width: 100%; margin-bottom: 20px; border-collapse: collapse; border-spacing: 0;"><tbody><tr><td style="width: 120px; padding: 5px 10px; font-weight: bold;">Product Name:</td><td style="padding: 5px 10px;">${req.body.productName}</td></tr><tr><td style="width: 120px; padding: 5px 10px; font-weight: bold;">Product Description:</td><td style="padding: 5px 10px;">${req.body.productDescription}</td></tr><tr><td style="width: 120px; padding: 5px 10px; font-weight: bold;">Product Price:</td><td style="padding: 5px 10px;">${req.body.unitPrice}</td></tr><tr><td style="width: 120px; padding: 5px 10px; font-weight: bold;">Product Image:</td><td style="padding: 5px 10px;"><img src="${1}" alt="[Product Name]" style="max-width: 100%;"></td></tr></tbody></table><p>Please login to your account to start selling this product. If you have any questions or concerns, please don't hesitate to contact us.</p><p>Thank you for being a part of our platform.</p><p>Best regards,</p><p>The iHerb Team</p></td></tr></tbody></table></body></html>`

    const data = {
        "email": "lakmuthushavinda@gmail.com",
        "subject": "Product created",
        "body": msgTemplate
    }

    const newInventoryProduct = new InventoryProduct({
        productId: req.body.productId,
        productName: req.body.productName,
        productDescription: req.body.productDescription,
        brand: req.body.brand,
        sellerName: req.body.sellerName,
        packageQuantity: req.body.packageQuantity,
        productCategory: req.body.productCategory,
        productWeight: req.body.productWeight,
        unitsInStock: req.body.unitsInStock,
        unitPrice: req.body.unitPrice
    });

    await newInventoryProduct
        .save()
        .then(inventoryProduct => {
            res.status(201).send({ response: inventoryProduct });

            axios.post("http://127.0.0.1:5000/v1/mail/newmail", data)
                .then(res => {
                    console.log("Confirmation mail sent");
                })
                .catch(err => console.log(err));
        })
        .catch(err => {
            res.status(404).send({ error: err })
        })

}



// update a exsisting inventory item
const updateInventoryItem = async (req, res) => {

    const updatedInventoryProduct = {
        productId: req.body.productId,
        productName: req.body.productName,
        productDescription: req.body.productDescription,
        brand: req.body.brand,
        sellerName: req.body.sellerName,
        packageQuantity: req.body.packageQuantity,
        productCategory: req.body.productCategory,
        productWeight: req.body.productWeight,
        unitsInStock: req.body.unitsInStock,
        unitPrice: req.body.unitPrice
    };

    await InventoryProduct
        .findOneAndUpdate({ productId: req.params.id }, updatedInventoryProduct, { returnDocument: "after" })
        .then(response => {

            //* email Template
            const msgTemplate = `<!DOCTYPE html><html><head><title>Product Updated</title><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head><body style="font-family: Arial, sans-serif; font-size: 14px; line-height: 1.5; color: #333;"><table style="width: 100%; max-width: 600px; margin: 0 auto; border-collapse: collapse; border-spacing: 0;"><tbody><tr><td style="background-color: #f5f5f5; padding: 20px;"><h1 style="margin: 0;">Product Updated</h1></td></tr><tr><td style="padding: 20px;"><p>Dear Seller,</p><p>We are writing to inform you that one of your products has been updated on our platform. Please find the updated details of the product below:</p><table style="width: 100%; margin-bottom: 20px; border-collapse: collapse; border-spacing: 0;"><tbody><tr><td style="width: 120px; padding: 5px 10px; font-weight: bold;">Product Name:</td><td style="padding: 5px 10px;">${response.productName}</td></tr><tr><td style="width: 120px; padding: 5px 10px; font-weight: bold;">Product Description:</td><td style="padding: 5px 10px;">${response.productDescription}</td></tr><tr><td style="width: 120px; padding: 5px 10px; font-weight: bold;">Product Price:</td><td style="padding: 5px 10px;">${response.unitPrice}</td></tr><tr><td style="width: 120px; padding: 5px 10px; font-weight: bold;">Product Image:</td><td style="padding: 5px 10px;"><img src="${response.productImageUrl}" alt="${response.productName}" style="max-width: 100%;"></td></tr></tbody></table><p>Please review the updated information for your product and ensure that it meets your requirements. If you have any questions or concerns, please don't hesitate to contact us.</p><p>Thank you for being a part of our platform.</p><p>Best regards,</p><p>The iHerb Team</p></td></tr></tbody></table></body></html>`;

            //* email data
            const data = {
                "email": "lakmuthushavinda@gmail.com",
                "subject": "Product updated",
                "body": msgTemplate
            }


            res.status(201).send({ resp: response })
            axios.post("http://127.0.0.1:5000/v1/mail/newmail", data)
                .then(res => {
                    console.log("Confirmation mail sent");
                })
                .catch(err => console.log(err));
        })
        .catch(err => { res.status(404).json({ error: err }) });
}

// delete a exsisting inventory item
const deleteInventoryItem = async (req, res) => {

    await InventoryProduct
        .findOneAndDelete({ productId: req.params.id })
        .then(response => { res.status(204).json({ resp: response }) })
        .catch(err => { res.status(404).json({ error: err }) });
}

module.exports = {
    getInventoryItems,
    getInventoryItem,
    addInventoryItem,
    updateInventoryItem,
    deleteInventoryItem
};
