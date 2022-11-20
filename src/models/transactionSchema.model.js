import joi from "joi";

export const transactionSchema = joi.object({
    description: joi.string().required().min(3),
    value: joi.number().required(),
    type: joi.any().required().valid("outcome","income")
})