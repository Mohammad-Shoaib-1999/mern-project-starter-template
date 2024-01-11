const express = require("express");
const router = express.Router();
const {
  createNewUser,
  loginWithPhoneOtp,
  verifyPhoneOtp,
  fetchCurrentUser,
  handleAdmin,
  logout,
} = require("../controller/auth");

router.post("/register", createNewUser);
router.post("/login_with_phone", loginWithPhoneOtp);
router.post("/verify", verifyPhoneOtp);
router.get("/me", fetchCurrentUser);
router.get("/me", handleAdmin);
router.get("/logout", logout);

module.exports = router;
