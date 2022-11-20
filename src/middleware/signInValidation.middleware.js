import bcrypt from 'bcrypt'
import { participantsCollection } from "../db/index.js";


export async function signInValidation(req,res,next){

    const user = req.body
    
    const userExist = await participantsCollection.findOne({email:user.email})
    if(!userExist){
      return res.status(401).send("email não foi cadastrado")
    }

    const passwordOk = bcrypt.compareSync(user.password, userExist.password)

    if(!passwordOk){
      return res.status(401).send('senha errada')
    }
    
    res.locals.user = userExist

    next()
}