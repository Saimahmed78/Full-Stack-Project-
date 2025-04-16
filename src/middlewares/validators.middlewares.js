import { validationResult } from "express-validator";
import { ApiError } from "../utils/Api-Error";
const validators = (req, res, next) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    return next;
  }

  const extractedErrors = [];
  errors.array().map((err) => {
    extractedErrors.push({
      [err.path]: err.msg,
    });
  });

  throw new ApiError(405,"Validation failed",extractedErrors)
};

export {validators}