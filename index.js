const express = require("express");
const dotenv = require("dotenv");
const app = express()
dotenv.config({ path: "./config.env" });
const bikeRoute = require('./router/bikes.route')

app.use("/api/",bikeRoute)

const PORT = process.env.PORT;

app.listen(PORT,() => {
    console.log("Server is running on port " + PORT)
})