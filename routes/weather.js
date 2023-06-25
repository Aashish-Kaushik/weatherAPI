const express = require("express");
const router = express.Router();
const { getlocationByName } = require("../controllers/getlocationbyname");
const { getlocationByPincode } = require("../controllers//getlocationbypincode");
const { weather } = require("../controllers/getWeather");
router.get("/weather", weather);
router.get("/locationbyname", getlocationByName);
router.get("/locationbypincode", getlocationByPincode);
module.exports = router;
