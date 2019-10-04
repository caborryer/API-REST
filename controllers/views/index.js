const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/about", (req, res) => {
  res.render("about");
});
router.get("/cart", (req, res) => {
  res.render("cart");
});

router.get("/product", (req, res) => {
  res.render("product");
});

module.exports = router;
