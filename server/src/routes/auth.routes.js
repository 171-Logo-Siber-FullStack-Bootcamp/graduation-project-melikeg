const router = require("express-promise-router")();
const authController = require("../controller/auth.controller");

router.post("/signup", authController.signUp);
router.post("/signin", authController.signIn);

module.exports = router;
