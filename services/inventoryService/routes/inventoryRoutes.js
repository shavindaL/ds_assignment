const express = require("express");
const router = express.Router();

const { getInventoryItems, getInventoryItem, addInventoryItem, updateInventoryItem, deleteInventoryItem } = require('../controller/inventoryController');
//* GET
router.get("/products", getInventoryItems);
router.get("/products/:id", getInventoryItem);
router.post("/products", addInventoryItem);
router.patch("/products/:id", updateInventoryItem);
router.delete("/products/:id", deleteInventoryItem);

module.exports = router;