import server from "./index"
;(() => {
  const PORT = process.env.API_PORT
  server.listen(PORT, () => {
    console.log(`Server start in Port: ${PORT}`)
  })
})()
