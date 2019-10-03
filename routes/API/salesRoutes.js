const express = require("express");
const SalesController = require("../../controllers/API/salesController");

var router = express.Router();

router.post("/sales", SalesController.create);
router.get("/sales", SalesController.list);

module.exports = router;
