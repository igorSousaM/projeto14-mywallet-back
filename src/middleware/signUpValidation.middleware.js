import { signUpSchema } from "../models/signUpSchema.model.js";

export async function signUpValidation(req,res,next){

    const user = req.body
    const validation = signUpSchema.validate(user,{abortEarly:false})

    if(validation.error){
        const errors = validation.error.details.map(detail => detail.message)
        return res.status(422).send(errors)
    }

    res.locals.user = user

    next()
}