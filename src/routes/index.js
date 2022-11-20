import { Router } from "express";
import participantsRouter from "./participantsRoutes.js";
import sessionRouter from "./sessionRoutes.js";
import transactionsRouter from "./transactionsRoutes.js";

const router = Router()
router.use(participantsRouter)
router.use(transactionsRouter)
router.use(sessionRouter)


export default router