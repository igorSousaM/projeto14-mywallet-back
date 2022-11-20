import { Router } from "express";
import participantsRoute from "./participantsRoutes.js";
import sessionRouter from "./sessionRoutes.js";
import transactionsRoute from "./transactionsRoutes.js";

const router = Router()
router.use(participantsRoute)
router.use(transactionsRoute)
router.use(sessionRouter)


export default router