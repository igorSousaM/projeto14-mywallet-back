import { Router } from "express";
import { updateSession, deleteUser} from "../controllers/session.controller.js";

const sessionRouter = Router()

sessionRouter.post("/session",updateSession)

sessionRouter.delete("/session",deleteUser)

export default sessionRouter
