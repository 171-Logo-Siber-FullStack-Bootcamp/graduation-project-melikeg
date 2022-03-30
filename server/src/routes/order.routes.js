const router = require("express-promise-router")();
const orderController = require("../controller/order.controller");

//CRUD Operations
router.post("/orders", orderController.createOrder);
router.get("/orders", orderController.listAllOrders);
router.delete("/orders/:id", orderController.deleteOrderById);
module.exports = router;
