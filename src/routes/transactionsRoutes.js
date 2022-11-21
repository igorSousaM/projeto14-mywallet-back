import { Router } from "express";
import { deleteTransaction, getTransactions, postTransaction, updateTransaction } from "../controllers/transactions.controller.js";
import { tokenValidation } from "../middleware/tokenValidation.middleware.js";
import transactionValidation from "../middleware/transactionValidation.middleware.js";

const transactionsRouter = Router()
transactionsRouter.use(tokenValidation)

transactionsRouter.post("/transaction",transactionValidation, postTransaction)
transactionsRouter.get("/transaction",getTransactions)
transactionsRouter.delete("/transaction/:id",deleteTransaction)
transactionsRouter.put("/transaction/:id",transactionValidation,updateTransaction)


export default transactionsRouter
