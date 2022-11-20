import { transactionsColletions } from "../db/index.js";

export async function makeTransaction(req, res) {
  const transactionInfo = res.locals.transactionInfo;

  try {
    await transactionsColletions.insertOne(transactionInfo);
    res.status(201).send("transação criada");
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export async function getTransactions(req, res) {
  
  const user = res.locals.user

  try{

    const transactionList = await transactionsColletions.find({userId:user._id}).toArray()
    res.status(200).send(transactionList)

  }catch(err){
    console.log(err)
    res.sendStatus(500)
  }
}
