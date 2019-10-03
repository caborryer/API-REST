const { Router } = require("express");

const router = Router();

router.get("/signup", (req, res) => {
  res.render("users/signup");
});

router.get("/signin", (req, res) => {
  res.render("users/signin");
});

module.exports = router;
