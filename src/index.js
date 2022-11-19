import express,{json} from "express"

const app = express()
app.use(cors())
app.use(json())


app.listen(5000)