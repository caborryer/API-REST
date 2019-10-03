const { Router } = require("express");

const router = Router();

const productController = require("../../controllers/API/productController");

router.get("/products", productController.list);
router.post("/products", productController.create);
router.get("/products", productController.search);
router.put("/products", productController.modify);

module.exports = router;
