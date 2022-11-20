import { transactionSchema } from "../models/transactionSchema.model.js";
import dayjs from "dayjs";

export default async function transactionValidation(req, res, next) {
  
  const user = res.locals.user
  
  const transactionInfo = req.body;

  const { error } = transactionSchema.validate(transactionInfo, {
    abortEarly: false,
  });

  if (error) {
    const errors = error.details.map((detail) => detail.message);
    return res.status(422).send(errors);
  }

  transactionInfo.userId = user._id;
  transactionInfo.time = `${dayjs().hour()}:${dayjs().minute()}:${dayjs().second()}`

  res.locals.transactionInfo = transactionInfo;

  next();
}
