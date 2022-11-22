const express = require("express")
const dotenv = require("dotenv")
const favicon = require("serve-favicon")
const path = require("path")
const https = require("https")
const fs = require("fs")

dotenv.config()

const app = express()

app.use(express.static("public"))
// app.use(favicon(path.join(__dirname, "public", "favicon.ico")))

https.createServer({
    key: fs.readFileSync("privkey.pem"),
    cert: fs.readFileSync("cert.pem"),
    ca: fs.readFileSync("chain.pem")
}, app)
.listen(3000, function() {
    console.log("website running on port " + process.env.PORT)
})
