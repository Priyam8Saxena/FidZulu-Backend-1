const express = require('express')
const router = express.Router()

const { findPricesOfBikes, team } = require("../api/bikes.controller")


router
    .route("/bikes")
    .get(findPricesOfBikes)
 
    
router
    .route("/team")  
    .get(team)  

module.exports = router