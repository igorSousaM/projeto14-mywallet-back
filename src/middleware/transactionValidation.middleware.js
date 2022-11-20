import { sessionCollection } from "../db/index.js";
import { transactionSchema } from "../models/transactionSchema.model.js";

export default async function transactionValidation(req, res, next) {
  const transactionInfo = req.body;
  
  const token = res.locals.token

  const { error } = transactionSchema.validate(transactionInfo, {
    abortEarly: false,
  });

  if (error) {
    const errors = error.details.map((detail) => detail.message);
    return res.status(422).send(errors);
  }

  const session = await sessionCollection.findOne({ token });

  if(!session){
    return res.status(400).send("token errado")
  }

  const userId = session.userId;

  transactionInfo.userId = userId;

  res.locals.transactionInfo = transactionInfo;

  next();
}
