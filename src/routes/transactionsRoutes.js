import { Router } from "express";
import { getTransactions, makeTransaction } from "../controllers/transactions.controller.js";
import transactionValidation from "../middleware/transactionValidation.middleware.js";

const transactionsRoute = Router()

transactionsRoute.post("/transaction",transactionValidation, makeTransaction)
transactionsRoute.get("/transaction", getTransactions)


export default transactionsRoute
