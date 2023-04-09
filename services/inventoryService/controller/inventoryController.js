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

    console.log(req);

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
            res.status(201).send({ response: inventoryProduct })
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
