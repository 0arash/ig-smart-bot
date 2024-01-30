import { body } from "express-validator";

export const authRegisterValidator = [
    body("email").notEmpty().withMessage("email is required."),
    body("name").notEmpty().withMessage("name is required."),
    body("password").notEmpty().withMessage("password is required."),
];
export const authLoginValidator = [
    body("email").notEmpty().withMessage("email is required."),
    body("password").notEmpty().withMessage("password is required."),
];
