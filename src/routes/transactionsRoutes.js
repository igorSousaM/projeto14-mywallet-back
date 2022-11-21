import { Router } from "express";
import { deleteTransaction, getTransactions, makeTransaction } from "../controllers/transactions.controller.js";
import { tokenValidation } from "../middleware/tokenValidation.middleware.js";
import transactionValidation from "../middleware/transactionValidation.middleware.js";

const transactionsRouter = Router()
transactionsRouter.use(tokenValidation)

transactionsRouter.post("/transaction",transactionValidation, makeTransaction)
transactionsRouter.get("/transaction",getTransactions)
transactionsRouter.delete("/transaction/:id",deleteTransaction)


export default transactionsRouter
