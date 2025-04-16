import { userRegistrationValidators,userloginValidators } from "../validators/user.validator";
import { validators } from "../middlewares/validators.middlewares";
import { Router } from "express";

const router= Router()

router.route("/register").post(validators,userRegistrationValidators,registerUser)