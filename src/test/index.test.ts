import request from "supertest"
import { describe, it, expect } from "@jest/globals"

import server from "../index"

describe("Api", () => {
  it("Test Healthcheck", async () => {
    await request(server).get("/api/healthcheck").expect(200)
  })
  it("Test list", async () => {
    const response = await request(server).get("/api/list")
    expect(response.status).toEqual(200)
    expect(response.headers["content-type"]).toMatch(/json/)
    expect(response.body).toEqual([{ name: "Gabriel" }, { name: "Pedro" }])
  })
})
