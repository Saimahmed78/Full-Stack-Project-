import { body } from "express-validator";

const userRegistrationValidators = () => {
  return [
    body("email")
      .trim()
      .isEmail()
      .withMessage("Email is invalid")
      .isEmpty()
      .withMessage("Email is required"),
    body("password").trim().isEmpty().withMessage("Password is required"),
  ];
};

const userloginValidators = () => {
    return [
      body("email")
        .trim()
        .isEmail()
        .withMessage("Email is invalid")
        .isEmpty()
        .withMessage("Email is required"),
      body("password").trim().isEmpty().withMessage("Password is required"),
    ];
  };
  
export {userRegistrationValidators,userloginValidators}