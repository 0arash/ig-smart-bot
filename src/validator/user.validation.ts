import { body, param } from "express-validator";

export const userByIdValidator = [
    param("id").notEmpty().withMessage("Id is required."),
];
export const userUpdateByIdValidator = [
    body("email").notEmpty().withMessage("Email is required."),
    body("password").notEmpty().withMessage("Password is required."),
    body("name").notEmpty().withMessage("Password is required."),
    body("code_meli").notEmpty().withMessage("Password is required."),
    body("address").notEmpty().withMessage("Password is required."),
];
