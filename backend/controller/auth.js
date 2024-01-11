exports.createNewUser = async (req, res, next) => {
  try {
    res.send("this is create user route");
  } catch (error) {
    return next(error);
  }
};

exports.loginWithPhoneOtp = async (req, res, next) => {
  try {
    res.send("this is Login user route");
  } catch (error) {
    next(error);
  }
};

exports.verifyPhoneOtp = async (req, res, next) => {
  try {
    res.send("this is Verify user route");
  } catch (error) {
    next(error);
  }
};

exports.fetchCurrentUser = async (req, res, next) => {
  try {
    res.send("this is current user route");
  } catch (error) {
    next(error);
  }
};

exports.handleAdmin = async (req, res, next) => {
  try {
    res.send("this is Admin protected route");
  } catch (error) {
    next(error);
  }
};

exports.logout = async (req, res, next) => {
  try {
    res.send("this is logout user route");
  } catch (error) {
    next(error);
  }
};
