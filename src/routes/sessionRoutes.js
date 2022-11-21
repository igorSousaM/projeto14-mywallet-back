import { Router } from "express";
import { updateSession, deleteUser, getPartcipantsOnline} from "../controllers/session.controller.js";
import {tokenValidation} from "../middleware/tokenValidation.middleware.js"

const sessionRouter = Router()

sessionRouter.delete("/session/:userId",deleteUser)

sessionRouter.use(tokenValidation)
sessionRouter.post("/session",updateSession)
sessionRouter.get("/session", getPartcipantsOnline)

export default sessionRouter
