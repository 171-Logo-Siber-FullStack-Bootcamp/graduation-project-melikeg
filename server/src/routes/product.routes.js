const router = require("express-promise-router")();
const productController = require("../controller/product.controller");

//CRUD Operations
router.post(
  "/products",
  productController.upload.single("image"),
  productController.createProduct
);
router.get("/products", productController.listAllProducts);
router.get("/products/:id", productController.findProductById);
router.put("/products/:id", productController.updateProductById);
router.delete("/products/:id", productController.deleteProductById);
router.get("/products/search", productController.searchProducts);

module.exports = router;
