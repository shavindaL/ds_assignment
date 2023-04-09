//* inventory product model
const InventoryProduct = require('../models/inventoryProduct');


//* get all items from the inventory
const getInventoryItems = async (req, res) => {
    InventoryProduct
        .find()
        .then(products => { res.status(200).send({ products: products }) })
        .catch(err => res.status(400).send({ error: err }));
}

//* get a specific item from the inventory
const getInventoryItem = async (req, res) => {
    InventoryProduct
        .findOne({ productId: req.params.id })
        .then(products => { res.status(200).send({ products: products }) })
        .catch(err => res.status(400).send({ error: err }));
}

//* add a new item to inventory
const addInventoryItem = async (req, res) => {

    const msgTemplate = "<!DOCTYPE html><html><head><title>New Product Created</title><meta charset='UTF-8'><meta name='viewport' content='width=device-width, initial-scale=1.0'></head><body style='font-family: Arial, sans-serif; font-size: 14px; line-height: 1.5; color: #333;'><table style='width: 100%; max-width: 600px; margin: 0 auto; border-collapse: collapse; border-spacing: 0;'><tbody><tr><td style='background-color: #f5f5f5; padding: 20px;'><h1 style='margin: 0;'>New Product Created</h1></td></tr><tr><td style='padding: 20px;'><p>Dear Seller,</p><p>We are pleased to inform you that a new product has been created on our platform. Please find the details of the product below:</p><table style='width: 100%; margin-bottom: 20px; border-collapse: collapse; border-spacing: 0;'><tbody><tr><td style='width: 120px; padding: 5px 10px; font-weight: bold;'>Product Name:</td><td style='padding: 5px 10px;'>[Product Name]</td></tr><tr><td style='width: 120px; padding: 5px 10px; font-weight: bold;'>Product Description:</td><td style='padding: 5px 10px;'>[Product Description]</td></tr><tr><td style='width: 120px; padding: 5px 10px; font-weight: bold;'>Product Price:</td><td style='padding: 5px 10px;'>[Product Price]</td></tr><tr><td style='width: 120px; padding: 5px 10px; font-weight: bold;'>Product Image:</td><td style='padding: 5px 10px;'><img src='[Product Image URL]' alt='[Product Name]' style='max-width: 100%;'></td></tr></tbody></table><p>Please login to your account to start selling this product. If you have any questions or concerns, please don't hesitate to contact us.</p><p>Thank you for being a part of our platform.</p><p>Best regards,</p><p>The [Company Name] Team</p></td></tr></tbody></table></body></html>"

    const data = {
        "email": "lakmuthushavinda@gmail.com",
        "subject": "New product has been created",
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
            fetch("http://127.0.0.1:5000/v1/mail/newmail", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                redirect: "follow", // manual, *follow, error
                referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                body: JSON.stringify(data), // body data type must match "Content-Type" header
            });
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
        .then(response => { res.status(201).send({ resp: response }) })
        .catch(err => { res.status(404).json({ error: err }) });
}

// delete a exsisting inventory item
const deleteInventoryItem = async (req, res) => {

    await InventoryProduct
        .findOneAndDelete({ productId: req.params.id })
        .then(response => { res.status(204).send({ resp: response }) })
        .catch(err => { res.status(404).json({ error: err }) });
}

module.exports = {
    getInventoryItems,
    getInventoryItem,
    addInventoryItem,
    updateInventoryItem,
    deleteInventoryItem
};
