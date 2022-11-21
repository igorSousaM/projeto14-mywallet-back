import { ObjectId } from "mongodb";
import { transactionsColletions } from "../db/index.js";

export async function postTransaction(req, res) {
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
  console.log(user)

  try{

    const transactionList = await transactionsColletions.find({userId:user._id}).toArray()
    res.status(200).send(transactionList)

  }catch(err){
    console.log(err)
    res.sendStatus(500)
  }
}

export async function deleteTransaction(req,res){

  const {id} = req.params

  try{

    const transaction = await transactionsColletions.findOne({
      _id: ObjectId(id),
    });

    if (!transaction) {
      return res.status(400).send("essa transação não existe");
    }

    await transactionsColletions.deleteOne({_id:ObjectId(id)})
    res.status(200).send("transação deletada com sucesso!")


  }catch(err){
    console.log(err)
    res.sendStatus(500)
  }
}

export async function updateTransaction(req,res){
  const {id} = req.params

  try{

    const transaction = await transactionsColletions.findOne({
      _id: ObjectId(id),
    });

    if (!transaction ) {
      return res.status(400).send("essa transação não existe");
    }

    await transactionsColletions.updateOne({
      _id:ObjectId(id)
    },{$set:req.body}
      )
    res.status(200).send("transação alterada com sucesso!")


  }catch(err){
    console.log(err)
    res.sendStatus(500)
  }
}