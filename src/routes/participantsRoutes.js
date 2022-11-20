import { Router } from "express"
import { signIn, signUp } from "../controllers/participants.controller.js"
import { signUpValidation } from "../middleware/signUpValidation.middleware.js"
import { signInValidation } from "../middleware/signInValidation.middleware.js"


const participantsRouter = Router()

participantsRouter.post("/sign-up",signUpValidation, signUp)

participantsRouter.post('/sign-in',signInValidation , signIn)


export default participantsRouter