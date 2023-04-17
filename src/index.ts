import dotenv from "dotenv"
dotenv.config()

import express from "express"
import cors from "cors"

import routes from "./routes/routes"

const server = express()

server.use(express.json())
server.use(cors())

server.use("/api", routes)
server.use("/api/healthcheck", (_, res: express.Response) => {
  return res.sendStatus(200)
})

export default server
