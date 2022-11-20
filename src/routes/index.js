import { Router } from "express";
import participantsRoute from "./participantsRoutes.js";
import transactionsRoute from "./transactionsRoutes.js";

const router = Router()
router.use(participantsRoute)
router.use(transactionsRoute)


export default router