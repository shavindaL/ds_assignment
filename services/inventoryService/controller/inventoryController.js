const { PutObjectCommand, GetObjectCommand, DeleteObjectCommand } = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
const axios = require("axios").default;
const crypto = require("crypto");
const sharp = require("sharp");

//* s3 client
const { s3 } = require("../libs/awsClient");

//* inventory product model
const InventoryProduct = require("../models/inventoryProduct");

//* random image name genarator
const randImgName = () => crypto.randomBytes(32).toString("hex");

/*-------------------------------------------------------------------------------------------------------------------------------------------------------------- */

//* get all items from the inventory
//* GET
const getInventoryItems = async (req, res) => {
    InventoryProduct.find()
        .sort('productId')
        .then(async (products) => {
            //* check if the products array is empty
            if (products !== null) {
                const inventoryProducts = [];
                let imageUrls = [];
                for (let product of products) {

                    imageUrls = [];

                    if (product != null) {
                        for (let productImage of product.productImages) {
                            const getObjectParams = {
                                Bucket: process.env.S3_BUCKET_NAME,
                                Key: productImage,
                            };

                            const command = new GetObjectCommand(getObjectParams);
                            //* get urls to images
                            await getSignedUrl(s3, command, { expiresIn: 6000 }).then((url) =>
                                imageUrls.push(url)
                            );
                        }
                    }
                    //* assign urls to images
                    inventoryProducts.push({ product, imageUrls })
                }

                res.status(200).json(inventoryProducts);
            }
            else {
                res.status(400).json({ error: "No products" });
            }


        })
        .catch((err) => res.status(400).send({ error: err }));
};

/*-------------------------------------------------------------------------------------------------------------------------------------------------------------- */

//* get a specific item from the inventory
//* GET
const getInventoryItem = async (req, res) => {
    InventoryProduct.findOne({ productId: req.params.id })
        .then(async (product) => {
            //* check if the product object is empty

            if (product != null) {
                const imageUrls = [];

                if (product != null) {
                    for (let productImage of product.productImages) {
                        const getObjectParams = {
                            Bucket: process.env.S3_BUCKET_NAME,
                            Key: productImage,
                        };

                        //* get urls to images
                        const command = new GetObjectCommand(getObjectParams);

                        await getSignedUrl(s3, command, { expiresIn: 3000 }).then((url) =>
                            imageUrls.push(url)
                        );
                    }
                }
                //* assign urls to images
                const inventoryProduct = { product, imageUrls }

                res.status(200).json(inventoryProduct);
            } else {
                res.status(400).json({ error: "No such product" });
            }
        })
        .catch((err) => res.status(404).json({ error: err }));
};

/*-------------------------------------------------------------------------------------------------------------------------------------------------------------- */

//* add a new item to inventory
//* POST
const addInventoryItem = async (req, res) => {
    //* email template
    const msgTemplate = `<!DOCTYPE html><html><head><title>New Product Created</title><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head><body style="font-family: Arial, sans-serif; font-size: 14px; line-height: 1.5; color: #333;"><table style="width: 100%; max-width: 600px; margin: 0 auto; border-collapse: collapse; border-spacing: 0;"><tbody><tr><td style="background-color: #f5f5f5; padding: 20px;"><h1 style="margin: 0;">New Product Created</h1></td></tr><tr><td style="padding: 20px;"><p>Dear Seller,</p><p>We are pleased to inform you that a new product has been created on our platform. Please find the details of the product below:</p><table style="width: 100%; margin-bottom: 20px; border-collapse: collapse; border-spacing: 0;"><tbody><tr><td style="width: 120px; padding: 5px 10px; font-weight: bold;">Product Name:</td><td style="padding: 5px 10px;">${req.body.productName}</td></tr><tr><td style="width: 120px; padding: 5px 10px; font-weight: bold;">Product Description:</td><td style="padding: 5px 10px;">${req.body.productDescription}</td></tr><tr><td style="width: 120px; padding: 5px 10px; font-weight: bold;">Product Price:</td><td style="padding: 5px 10px;">${req.body.unitPrice}</td></tr></tbody></table><p>Please login to your account to start selling this product. If you have any questions or concerns, please don't hesitate to contact us.</p><p>Thank you for being a part of our platform.</p><p>Best regards,</p><p>The iHerb Team</p></td></tr></tbody></table></body></html>`;

    //* email options
    const data = {
        email: "lakmuthushavinda@gmail.com",
        subject: "Product created",
        body: msgTemplate,
    };

    const images = req.files;
    const imageNames = [];

    if (images != null) {
        //* upload images to s3 bucket
        images.forEach(async (image) => {
            //* image name
            const imageName = randImgName();

            //* save images to image array
            imageNames.push(imageName);

            //* resize the image
            const buffer = await sharp(image.buffer)
                .resize({ height: 300, width: 300, fit: "contain" })
                .toBuffer();

            //* S3 parameters
            const s3Params = {
                Bucket: process.env.S3_BUCKET_NAME,
                Key: imageName,
                Body: buffer,
                ContentType: image.mimetype,
            };
            const command = new PutObjectCommand(s3Params);

            await s3.send(command);
        });
    }

    const lastProductId = await InventoryProduct.find().sort({ productId: -1 });

    //* update product Id
    let productId;
    if (lastProductId == "") {
        productId = 1
    }
    else {
        productId = (lastProductId[0].productId + 1)
    }


    //* new product object
    const newInventoryProduct = new InventoryProduct({
        productId: productId,
        productName: req.body.productName,
        productDescription: req.body.productDescription,
        brand: req.body.brand,
        sellerId: req.body.sellerId,
        packageQuantity: req.body.packageQuantity,
        productCategory: req.body.productCategory,
        productWeight: req.body.productWeight,
        unitsInStock: req.body.unitsInStock,
        unitPrice: req.body.unitPrice,
        productImages: imageNames,
    });

    //* add product to mongodb
    await newInventoryProduct
        .save()
        .then((inventoryProduct) => {
            res.status(201).send({ response: inventoryProduct });

            // axios
            //     .post("http://127.0.0.1:5000/v1/mail/newmail", data)
            //     .then((res) => {
            //         console.log("Confirmation mail sent");
            //     })
            //     .catch((err) => console.log(err));
        })
        .catch((err) => {
            res.status(404).send({ error: err });
        });
};

/*-------------------------------------------------------------------------------------------------------------------------------------------------------------- */

//* update a exsisting inventory item
//* PATCH
const updateInventoryItem = async (req, res) => {

    const images = req.files;
    const productImageNames = req.body.productImages;
    const imageNames = [];
    if (images != null) {
        //* upload images to s3 bucket
        for (let i = 0; i < images.length; i++) {
            //* image name
            let imageName = "";
            if (productImageNames[i] !== undefined) {
                imageName = productImageNames[i];
            }
            else {
                imageName = randImgName();
            }
            //* save images to image array
            imageNames.push(imageName);

            //* resize the image
            const buffer = await sharp(images[i].buffer)
                .resize({ height: 300, width: 300, fit: "contain" })
                .toBuffer();
            //* S3 parameters
            const s3Params = {
                Bucket: process.env.S3_BUCKET_NAME,
                Key: imageName,
                Body: buffer,
                ContentType: images[i].mimetype,
            };
            const command = new PutObjectCommand(s3Params);
            await s3.send(command);
        }
    }

    //* inventory product object
    const updatedInventoryProduct = {
        productId: req.params.id,
        productName: req.body.productName,
        productDescription: req.body.productDescription,
        brand: req.body.brand,
        sellerId: req.body.sellerId,
        packageQuantity: req.body.packageQuantity,
        productCategory: req.body.productCategory,
        productWeight: req.body.productWeight,
        unitsInStock: req.body.unitsInStock,
        unitPrice: req.body.unitPrice,
        productImages: imageNames
    };


    await InventoryProduct.findOneAndUpdate(
        { productId: req.params.id },
        updatedInventoryProduct,
        { returnDocument: "after" }
    )
        .then((response) => {

            //* email Template
            const msgTemplate = `<!DOCTYPE html><html><head><title>Product Updated</title><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head><body style="font-family: Arial, sans-serif; font-size: 14px; line-height: 1.5; color: #333;"><table style="width: 100%; max-width: 600px; margin: 0 auto; border-collapse: collapse; border-spacing: 0;"><tbody><tr><td style="background-color: #f5f5f5; padding: 20px;"><h1 style="margin: 0;">Product Updated</h1></td></tr><tr><td style="padding: 20px;"><p>Dear Seller,</p><p>We are writing to inform you that one of your products has been updated on our platform. Please find the updated details of the product below:</p><table style="width: 100%; margin-bottom: 20px; border-collapse: collapse; border-spacing: 0;"><tbody><tr><td style="width: 120px; padding: 5px 10px; font-weight: bold;">Product Name:</td><td style="padding: 5px 10px;">${response.productName}</td></tr><tr><td style="width: 120px; padding: 5px 10px; font-weight: bold;">Product Description:</td><td style="padding: 5px 10px;">${response.productDescription}</td></tr><tr><td style="width: 120px; padding: 5px 10px; font-weight: bold;">Product Price:</td><td style="padding: 5px 10px;">${response.unitPrice}</td></tr><tr><td style="width: 120px; padding: 5px 10px; font-weight: bold;">Product Image:</td><td style="padding: 5px 10px;"><img src="${response.productImageUrl}" alt="${response.productName}" style="max-width: 100%;"></td></tr></tbody></table><p>Please review the updated information for your product and ensure that it meets your requirements. If you have any questions or concerns, please don't hesitate to contact us.</p><p>Thank you for being a part of our platform.</p><p>Best regards,</p><p>The iHerb Team</p></td></tr></tbody></table></body></html>`;

            //* email data
            const data = {
                email: "lakmuthushavinda@gmail.com",
                subject: "Product updated",
                body: msgTemplate,
            };

            res.status(201).json(response);
            // axios
            //     .post("http://127.0.0.1:5000/v1/mail/newmail", data)
            //     .then(() => {
            //         console.log("Confirmation mail sent");
            //     })
            //     .catch((err) => console.log(err));
        })
        .catch((err) => {
            res.status(404).json({ error: err });
        });
};

/*-------------------------------------------------------------------------------------------------------------------------------------------------------------- */

//* delete a exsisting inventory item
//* DELETE
const deleteInventoryItem = async (req, res) => {

    const product = await InventoryProduct.findOne({ productId: req.params.id });

    if (!product) {
        res.status(404).json({ error: "Product not found" });
    }
    else {
        for (let productImage of product.productImages) {
            const deleteObjectParams = {
                Bucket: process.env.S3_BUCKET_NAME,
                Key: productImage,
            };

            //* get urls to images
            const command = new DeleteObjectCommand(deleteObjectParams);
            s3.send(command)
        }

        await InventoryProduct
            .findOneAndDelete({ productId: req.params.id })
            .then(product => res.status(200).json({ msg: "product deleted", deleted: product }))
            .catch(err => res.status(404).json(err));

    }
};

module.exports = {
    getInventoryItems,
    getInventoryItem,
    addInventoryItem,
    updateInventoryItem,
    deleteInventoryItem,
};
