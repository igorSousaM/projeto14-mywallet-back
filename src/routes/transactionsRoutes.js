import { Router } from "express";
import { deleteTransaction, getTransactions, makeTransaction, updateTransaction } from "../controllers/transactions.controller.js";
import { tokenValidation } from "../middleware/tokenValidation.middleware.js";
import transactionValidation from "../middleware/transactionValidation.middleware.js";

const transactionsRouter = Router()
transactionsRouter.use(tokenValidation)

transactionsRouter.post("/transaction",transactionValidation, makeTransaction)
transactionsRouter.get("/transaction",getTransactions)
transactionsRouter.delete("/transaction/:id",deleteTransaction)
transactionsRouter.put("/transaction/:id",transactionValidation,updateTransaction)


export default transactionsRouter
