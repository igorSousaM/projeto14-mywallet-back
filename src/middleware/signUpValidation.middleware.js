import { signUpSchema } from "../models/signUpSchema.model.js";
import bcrypt from 'bcrypt'
import { participantsCollection } from "../db/index.js";

export async function signUpValidation(req,res,next){

    const user = req.body

    const userExist = await participantsCollection.findOne({email:user.email})
    if(userExist){
      return res.status(409).send('email ja existe!')
    }

    const {error} = signUpSchema.validate(user,{abortEarly:false})

    if(error){
        const errors = error.details.map(detail => detail.message)
        return res.status(422).send(errors)
    }

    const hashPassword = bcrypt.hashSync(user.password , 12)
    

    res.locals.user = {...user, password: hashPassword}

    next()
}