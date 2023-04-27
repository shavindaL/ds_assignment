const express = require("express");
const router = express.Router();

const { getInventoryItems, getInventoryItem, addInventoryItem, updateInventoryItem, deleteInventoryItem, searchInventoryItems, getInventoryItemsBySeller, updateInventoryItemQty } = require('../controller/inventoryController');
//* GET
router.get("/products", getInventoryItems);
router.get("/products/:id", getInventoryItem);
router.get("/products/search/:prodName", searchInventoryItems);
router.get("/products/seller/:sellerId", getInventoryItemsBySeller);
router.post("/products", addInventoryItem);
router.put("/products/:id", updateInventoryItem);
router.put("/products/qty/:id", updateInventoryItemQty);
router.delete("/products/:id", deleteInventoryItem);

module.exports = router;