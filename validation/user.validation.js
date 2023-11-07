const { body } = require("express-validator");

const userRegisterValidation = [
  body("name")
    .exists()
    .notEmpty()
    .withMessage("Name is required.")
    .isString()
    .withMessage("Name must be string."),
  body("mobile").exists().notEmpty().withMessage("Mobile is required."),
  body("ig_username")
    .exists()
    .notEmpty()
    .withMessage("Instagram username is required."),
];
const userLoginValidation = [
  body("mobile").exists().notEmpty().withMessage("Mobile is required."),
  body("sms_code")
    .exists()
    .notEmpty()
    .withMessage("Verification code is required."),
];

module.exports = { userRegisterValidation, userLoginValidation };
