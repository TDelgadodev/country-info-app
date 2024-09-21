const express = require('express');
const { getAvailableCountries, getCountryInfo } = require('../controllers/countryController');

const router = express.Router();

router
    .get('/countries', getAvailableCountries)
    .get('/countries/:countryCode', getCountryInfo)

module.exports = router;
