import { Router } from "express";
import { makeTransaction } from "../controllers/transactions.controller.js";
import transactionValidation from "../middleware/transactionValidation.middleware.js";

const transactionsRoute = Router()

transactionsRoute.post("/transaction",transactionValidation, makeTransaction)

export default transactionsRoute
