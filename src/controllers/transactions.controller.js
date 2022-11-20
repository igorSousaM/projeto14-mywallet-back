import { sessionCollection, transactionsColletions } from "../db/index.js";
import dayjs from "dayjs";

export async function makeTransaction(req, res) {
  const transactionInfo = res.locals.transactionInfo;

  const body = {
    ...transactionInfo,
    time: `${dayjs().hour()}:${dayjs().minute()}:${dayjs().second()}`,
  };

  try {
    await transactionsColletions.insertOne(body);
    res.status(201).send("transação criada");
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export async function getTransactions(req, res) {
  
  const token = res.locals.token

  const session = await sessionCollection.findOne({ token });

  if(!session){
    return res.status(400).send("token errado")
  }

  const userId = session.userId

  try{

    const transactionList = await transactionsColletions.find({userId}).toArray()
    res.status(200).send(transactionList)

  }catch(err){
    console.log(err)
    res.sendStatus(500)
  }
}
