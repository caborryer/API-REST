const { Router } = require("express");
const router = Router();

router.get("/products/cereals", (req, res) => {
  const name = ["Oats", "Bread", "Cereals", "Pasta"];
  res.render("products", { name });
});

router.get("/products/despensa", (req, res) => {
  const name = [
    "Checkpeas",
    "Beans",
    "Honey",
    "Lentils",
    "Oil",
    "Rice",
    "Salt",
    "Sugar"
  ];
  res.render("products", { name });
});

router.get("/products/fruits", (req, res) => {
  const name = [
    "Apple",
    "Banana",
    "Cereza",
    "Strawberry",
    "Pasionfruit",
    "Blackberry",
    "Orange",
    "Papaya",
    "Pinapple",
    "Watermelon"
  ];
  res.render("products", { name });
});

router.get("/products/Grocery", (req, res) => {
  const name = ["Coffe", "Chocolate"];
  res.render("products", { name });
});

router.get("/products/meats", (req, res) => {
  const name = ["Beef", "Chicken", "Eggs", "Fish", "Ham", "Sausage"];
  res.render("products", { name });
});

router.get("/products/other", (req, res) => {
  const name = ["Cheese", "Milk", "Yogurt"];
  res.render("products", { name });
});

router.get("/products/vegetebles", (req, res) => {
  const name = [
    "Cauliflower",
    "Corn",
    "Spinach",
    "Lettuce",
    "Lemon",
    "Potato",
    "Tomato",
    "Carrot"
  ];
  res.render("products", { name });
});

router.get("/products/smothingelse", (req, res) => {
  const name = ["Cauliflower", "Corn", "Spinach", "Lettuce", "Lemon"];
  res.render("products", { name });
});


module.exports = router;
