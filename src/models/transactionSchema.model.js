import joi from "joi";

export const transactionSchema = joi.object({
    description: joi.string().required().min(3),
    value: joi.string().required(),
    type: joi.any().required().valid("outcome","income")
})