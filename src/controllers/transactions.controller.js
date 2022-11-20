import  {transactionsColletions} from "../db/index.js"
import dayjs from "dayjs"

export async function makeTransaction(req,res){
    
    
    const transactionInfo = res.locals.transactionInfo

    const body = {
        ...transactionInfo,
        time:`${dayjs().hour()}:${dayjs().minute()}:${dayjs().second()}`
    }

    try{
        await transactionsColletions.insertOne(body)
        res.status(201).send("transação criada")
    }catch(err){
        console.log(err)
        res.sendStatus(500)
    }
}