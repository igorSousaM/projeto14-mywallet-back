import { json } from "body-parser"
import express from "express"

const app = express()
app.use(cors())
app.use(express.json())


app.listen(5000)