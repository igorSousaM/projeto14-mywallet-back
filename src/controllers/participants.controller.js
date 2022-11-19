import { participantsCollection } from "../db/index.js"

export async function signUp(req, res) {

  const user = res.locals.user

  try {
    await participantsCollection.insertOne(user);
    res.status(201).send("Cadastrado com sucesso!");
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
