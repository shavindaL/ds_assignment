const express = require("express");
const router = express.Router();

const { getInventoryItems, getInventoryItem, addInventoryItem, updateInventoryItem, deleteInventoryItem, searchInventoryItems } = require('../controller/inventoryController');
//* GET
router.get("/products", getInventoryItems);
router.get("/products/:id", getInventoryItem);
router.get("/products/search/:prodName", searchInventoryItems);
router.post("/products", addInventoryItem);
router.put("/products/:id", updateInventoryItem);
router.delete("/products/:id", deleteInventoryItem);

module.exports = router;