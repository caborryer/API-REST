const { Router } = require("express");

const router = Router();

const { auth } = require("./secureRotes");

const userController = require("../../controllers/API/userController");

router.get("/users", auth, userController.list);
router.post("/users", userController.create);
router.get("/users/:id", auth, userController.search);
router.put("/users/:id", auth, userController.modify);
// router.destroy("/user/:id/:status", userController.destroy);
router.post("/login", userController.login);

module.exports = router;
