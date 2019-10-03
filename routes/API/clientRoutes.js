const { Router } = require("express");

const router = Router();

const { list } = require("../../controllers/API/clientController");

router.route("/clients").get(list);

module.exports = router;
