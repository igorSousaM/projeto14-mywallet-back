import { participantsCollection, sessionCollection } from "../db/index.js";

export async function tokenValidation(req,res,next) {
    const { authorization } = req.headers;
    const token = authorization?.replace("Bearer ", "");
  
    if (!token) {
      return res.status(401).send("não tem token");
    }

    const session = await sessionCollection.findOne({ token });

    if(!session){
      return res.status(400).send("token errado")
    }

    const user = await participantsCollection.findOne({ 
      _id: session.userId 
    });

    if (!user) {
      return res.sendStatus(401);
    }

    delete user.password;

    res.locals.user = user
    
    next()
};
