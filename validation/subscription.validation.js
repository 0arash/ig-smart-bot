const { body } = require("express-validator");

const newSubscriptionValidation = [
  body("title").exists().notEmpty().withMessage("Title is required."),
  body("days").exists().notEmpty().withMessage("Days is required."),
  body("price").exists().notEmpty().withMessage("Price is required."),
];
const getSubscriptionValidation = [
  body("title").exists().notEmpty().withMessage("Title is required."),
];
const deleteSubscriptionValidation = [
  body("title").exists().notEmpty().withMessage("Title is required."),
];

module.exports = {
  newSubscriptionValidation,
  getSubscriptionValidation,
  deleteSubscriptionValidation,
};
