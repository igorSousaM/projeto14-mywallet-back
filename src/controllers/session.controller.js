import { sessionCollection } from "../db/index.js";

export async function updateSession(req, res) {

  const token = res.locals.token

    const session = await sessionCollection.findOne({ token });

    if(!session){
      return res.status(400).send("token errado")
    }
  

  try {
    await sessionCollection.updateOne({ _id: session._id }, {
        $set: {...session, lastStatus : Date.now()}
    });
    return res.sendStatus(200);
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
}

export async function deleteUser(req,res){

  const token = res.locals.token

    const session = await sessionCollection.findOne({ token });

    if(!session){
      return res.status(400).send("token errado")
    }

    try{

        await sessionCollection.deleteOne(session)
        res.status(200).send("usuario foi tirado da sessao")

    }catch(err){
        console.log(err)
        res.sendStatus(500)
    }
}
