import { Router } from "express";
import participantsRoute from "./participantsRoutes";

const router = Router()
router.use(participantsRoute)


export default router