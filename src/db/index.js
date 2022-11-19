import { MongoClient } from "mongodb";
import dotenv from "dotenv"

dotenv.config()

const mongoClient = new MongoClient(process.env.MONGO_URI)

await mongoClient.connect();

const db = mongoClient.db("myWallet")

const participantsCollection = db.collection("participants")
const sessionCollection = db.collection("session")
const transactionsColletions = db.collection("transactions")

export {
    participantsCollection,
    sessionCollection,
    transactionsColletions
}