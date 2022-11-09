const express = require("express");

const dotenv = require("dotenv");

const bodyParser = require("body-parser")

const app = express()

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({
    extended:true
}))

dotenv.config({ path: "./config.env" });

const bikeRoute = require('./router/bikes.route')

app.use("/",bikeRoute)

const PORT = process.env.PORT;

app.listen(PORT,() => {
    console.log("Server is running on port " + PORT)
})