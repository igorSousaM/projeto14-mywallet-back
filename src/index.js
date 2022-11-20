import express,{json} from "express"
import route from "./routes/participantsRoutes.js"
import cors from "cors"


const app = express()
app.use(cors())
app.use(json())
app.use(route)


app.listen(5000)