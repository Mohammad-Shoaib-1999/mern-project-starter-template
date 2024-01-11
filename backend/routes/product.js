// routes/products.js
const express = require('express');
const router = express.Router();
const {
    getAllProducts,
    getProductCategories,
    getProductsInCategory,
    getProduct,
    addProduct,
    editProduct,
    deleteProduct
  } = require("../controller/product");

router.get("/", getAllProducts);
router.get("/categories", getProductCategories);
router.get("/category/:category", getProductsInCategory);
router.get("/:id", getProduct);
router.post("/create", addProduct);
router.put("/:id", editProduct);
router.patch("/:id", editProduct);
router.delete("/:id", deleteProduct);

// export the router module so that server.js file can use it
module.exports = router;