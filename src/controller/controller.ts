import { Request, Response } from "express"

const controller = {
  list: async (req: Request, res: Response) => {
    return res.json([{ name: "Gabriel" }, { name: "Pedro" }]).send()
  }
}

export default controller
