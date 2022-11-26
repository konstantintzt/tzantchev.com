const express = require("express")
const dotenv = require("dotenv")

dotenv.config()

const app = express()

app.use(express.static("public", { extensions: ['html'] }))

app.listen(process.env.PORT, function() {
    console.log("website running on port " + process.env.PORT)
})