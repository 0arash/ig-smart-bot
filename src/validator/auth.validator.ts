import { body } from "express-validator";

export const authRegisterValidator = [
    body("email").notEmpty().withMessage("Email is required."),
    body("name").notEmpty().withMessage("Name is required."),
    body("password").notEmpty().withMessage("Password is required."),
];
export const authLoginValidator = [
    body("email").notEmpty().withMessage("Email is required."),
    body("password").notEmpty().withMessage("Password is required."),
];
