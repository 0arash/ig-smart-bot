const express = require("express");
const router = express.Router();
const userController = require("../controller/user.controller");
const {
  userRegisterValidation,
  userLoginValidation,
} = require("../validation/user.validation");
const {
  handleValidationErrors,
} = require("../validation/handle.validation.errors");

router.post(
  "/register",
  userRegisterValidation,
  handleValidationErrors,
  userController.registerUser
);
router.post(
  "/login",
  userLoginValidation,
  handleValidationErrors,
  userController.loginUser
);

module.exports = router;
