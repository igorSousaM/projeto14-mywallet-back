import { participantsCollection } from "../db/index.js"
import { sessionCollection } from "../db/index.js";
import { v4 as uuidV4} from 'uuid';

export async function signUp(req, res) {

  const user = res.locals.user

  try {
    await participantsCollection.insertOne(user);
    res.sendStatus(201);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export async function signIn(req, res) {

  const userExist = res.locals.user
  const token = uuidV4()

  try {

    await sessionCollection.insertOne({
      token,
      userId: userExist._id,
      lastStatus: Date.now()
    })

    const body = { token : {token}, user: userExist}

    res.status(201).send(body);

  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export async function getParticipants(req,res){
  try{
    const participantsList = await participantsCollection.find().toArray()
    res.status(200).send(participantsList)
  }catch(err){
    console.log(err)
    res.sendStatus(500)
  }
}
