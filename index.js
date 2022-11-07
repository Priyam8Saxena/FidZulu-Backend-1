const express = require("express");

const app = express()

const bikeRoute = require('./router/bikes.route')

app.use("/api/",bikeRoute)

const PORT = process.env.PORT | 3031;

app.listen(PORT,() => {
    console.log("Server is running on port " + PORT)
})