import { Router } from "express"
import { signIn, signUp } from "../controllers/participants.controller.js"
import { signUpValidation } from "../middleware/signUpValidation.middleware.js"
import { signInValidation } from "../middleware/signInValidation.middleware.js"


const route = Router()

route.post("/sign-up",signUpValidation, signUp)

route.post('/sign-in',signInValidation , signIn)


export default route