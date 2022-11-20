import { Router } from "express";
import { updateSession, deleteUser} from "../controllers/session.controller.js";
import {tokenValidation} from "../middleware/tokenValidation.middleware.js"

const sessionRouter = Router()
sessionRouter.use(tokenValidation)

sessionRouter.post("/session",updateSession)

sessionRouter.delete("/session",deleteUser)

export default sessionRouter
