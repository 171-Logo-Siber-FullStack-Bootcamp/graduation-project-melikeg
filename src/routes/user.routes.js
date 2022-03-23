const router = require("express-promise-router")();
const userController = require("../controller/user.controller");

//CRUD Operations
router.post("/users", userController.createUser);
router.get("/users", userController.listAllUsers);
router.put("/users/:id", userController.updateUserById);
router.delete("/users/:id", userController.deleteUserById);
router.post("/users/login", userController.authenticateUser);

module.exports = router;
