const express = require('express')
const router = express.Router()

const { findPricesOfBikes, team, insertBike } = require("../api/bikes.controller")


router
    .route("/bikes")
    .get(findPricesOfBikes)
    //.post(insertBike)
    
router
    .route("/team")  
    .get(team)  

module.exports = router