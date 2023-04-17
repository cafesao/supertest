import { Router } from "express"
import controller from "../controller/controller"

const routes = Router()

routes.get("/list", controller.list)

export default routes
