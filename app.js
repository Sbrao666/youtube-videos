require('./src/common/jobs/video.cron.job')
const express = require("express");

const video = require('./src/routes/video.route')

const port = process.env.PORT
const app = express()

app.use(express.json())
app.use('/video', video);

app.listen(port, async () => {
    console.log("Server is up and running on port : " + port)
})