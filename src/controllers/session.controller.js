import { sessionCollection } from "../db/index.js";

export async function updateSession(req, res) {

  const user = res.locals.user
  

  try {
    await sessionCollection.updateOne({ userId: user._id }, {
        $set: {...session, lastStatus : Date.now()}
    });
    return res.sendStatus(200);
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
}

export async function deleteUser(req,res){

  const user = req.locals.user

    try{

        await sessionCollection.deleteOne({userId: user._id})
        res.status(200).send("usuario foi tirado da sessao")

    }catch(err){
        console.log(err)
        res.sendStatus(500)
    }
}

export async function getPartcipantsOnline(req,res){
  try{
    const participantsOnlineList = await sessionCollection.find().toArray()
    res.status(200).send(participantsOnlineList)
  }catch(err){
    console.log(err)
    res.sendStatus(500)
  }
}