const { Router } = require("express");
const router = Router();

router.use(require("../controllers/views/userView"));
router.use(require("../controllers/views/user"));
router.use(require("../controllers/views/index"));
router.use(require("../controllers/views/product"));

module.exports = router;
