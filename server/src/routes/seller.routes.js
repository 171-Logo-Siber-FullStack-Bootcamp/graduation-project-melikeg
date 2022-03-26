const router = require("express-promise-router")();
const sellerController = require("../controller/seller.controller");

//CRUD Operations
router.get("/sellers", sellerController.listAllSellers);
router.put("/sellers/:id", sellerController.updateSellerById);
router.delete("/sellers/:id", sellerController.deleteSellerById);

module.exports = router;
