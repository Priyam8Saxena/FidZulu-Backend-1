const express = require('express')
const router = express.Router()

const { findPricesOfBikes } = require("../api/bikes.controller")

router
    .route("/bikes/:location")
    .get(findPricesOfBikes)

module.exports = router