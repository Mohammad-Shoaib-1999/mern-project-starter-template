exports.getAllUser = async (req, res, next) => {
    try {
      res.send("this is create user route");
    } catch (error) {
      return next(error);
    }
  };
  
  exports.getUser = async (req, res, next) => {
    try {
      res.send("this is Login user route");
    } catch (error) {
      next(error);
    }
  };
  
  exports.addUser = async (req, res, next) => {
    try {
      res.send("this is Verify user route");
    } catch (error) {
      next(error);
    }
  };
  
  exports.editUser = async (req, res, next) => {
    try {
      res.send("this is current user route");
    } catch (error) {
      next(error);
    }
  };
  
  exports.deleteUser = async (req, res, next) => {
    try {
      res.send("this is Admin protected route");
    } catch (error) {
      next(error);
    }
  };
  

  