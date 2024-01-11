exports.getAllProducts = async (req, res, next) => {
    try {
      res.send("this is get all product route");
    } catch (error) {
      return next(error);
    }
  };

  exports.getProductCategories = async (req, res, next) => {
    try {
      res.send("this is get product categories route");
    } catch (error) {
      return next(error);
    }
  };

  exports.getProductsInCategory = async (req, res, next) => {
    try {
      res.send("this is get products in categories route");
    } catch (error) {
      return next(error);
    }
  };

  exports.getProduct = async (req, res, next) => {
    try {
      res.send("this is get product based on id route");
    } catch (error) {
      return next(error);
    }
  };

  exports.addProduct = async (req, res, next) => {
    try {
      res.send("this is add product route");
    } catch (error) {
      return next(error);
    }
  };

  exports.editProduct = async (req, res, next) => {
    try {
      res.send("this is the edit product route");
    } catch (error) {
      return next(error);
    }
  };

  exports.deleteProduct = async (req, res, next) => {
    try {
      res.send("this is the delete product route");
    } catch (error) {
      return next(error);
    }
  };