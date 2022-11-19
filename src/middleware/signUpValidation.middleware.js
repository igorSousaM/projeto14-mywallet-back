import { signUpSchema } from "../models/signUpSchema.model.js";

export async function signUpValidation(req,res,next){
    const validation = signUpSchema.validate(req.body,{abortEarly:false})

    if(validation.error){
        const errors = validation.error.details.map(detail => detail.message)
        return res.status(422).send(errors)
    }

    return res.locals.user

    next()
}