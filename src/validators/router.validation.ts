import { body, param } from "express-validator";

export const paramIdValidator = [
    param("id").notEmpty().withMessage("id is required."),
];
export const userUpdateByIdValidator = [
    body("email").notEmpty().withMessage("email is required."),
    body("password").notEmpty().withMessage("password is required."),
    body("name").notEmpty().withMessage("name is required."),
    body("code_meli").notEmpty().withMessage("code_meli is required."),
    body("address").notEmpty().withMessage("address is required."),
];

export const emailValidator = [
    body("email").notEmpty().withMessage("email is required."),
];
