import { Router } from "express"
import { getParticipants, signIn, signUp } from "../controllers/participants.controller.js"
import { signUpValidation } from "../middleware/signUpValidation.middleware.js"
import { signInValidation } from "../middleware/signInValidation.middleware.js"


const participantsRouter = Router()

participantsRouter.post("/sign-up",signUpValidation, signUp)

participantsRouter.post('/sign-in',signInValidation , signIn)

participantsRouter.get("/participants",getParticipants)


export default participantsRouter