const {body} = require("express-validator")

const newBotValidation = [
    body("username")
    .exists()
    .notEmpty()
    .withMessage("Instagram username is required."),
    body("password")
    .exists()
    .notEmpty()
    .withMessage("Instagram password is required."),
]

module.exports= {
    newBotValidation
}