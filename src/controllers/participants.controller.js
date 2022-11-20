import { participantsCollection } from "../db/index.js"
import { sessionCollection } from "../db/index.js";
import bcrypt from 'bcrypt'

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

export async function signIn(req, res) {

  const user = res.locals.user

  try {

   await sessionCollection.insertOne(user)

    res.status(201).send("Cadastrado com sucesso!");
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

