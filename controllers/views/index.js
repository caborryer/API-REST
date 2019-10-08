const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/product", (req, res) => {
  res.render("product");
});

router.get("/compra", (req, res) => {
  res.render("compra");
});
router.get("/succes", (req, res) => {
  res.render("succes");
});

module.exports = router;
