require('dotenv').config()
const express = require("express")
const app = express()
const port = process.env.PORT

app.get('/', (req , res) => {
    res.send("<h1>This is new project beginning</h1>")
})

app.listen(port , () => {
    console.log(`app lsitens on port ${port}`)
})