const express = require("express");


const app = express()

app.use(express.json()) //It parses incoming requests with JSON payloads.
const port = process.env.PORT

app.listen(port, async () => {
    console.log("Server is up and running on port : " + port)
})