const express = require('express')
const router = express.Router()

const { findPricesOfBikes, information } = require("../api/bikes.controller")
const { team } = require("../api/bikes.controller")

router
    .route("/bikes/:location")
    .get(findPricesOfBikes)
 
router
    .route("/team")  
    .get(team)  

module.exports = router