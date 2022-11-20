import express,{json} from "express"
import cors from "cors"
import participantsRoute from "./routes/participantsRoutes.js"



const app = express()
app.use(cors())
app.use(json())
app.use(participantsRoute)



app.listen(5000)