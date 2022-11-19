import { Router } from "express"
import { signUp } from "../controllers/participants.controller.js"
import { signUpValidation } from "../middleware/signUpValidation.middleware.js"


const route = Router()

route.post("/sign-up",signUpValidation, signUp)


export default route