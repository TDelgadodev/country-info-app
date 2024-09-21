const axios = require("axios");
require("dotenv").config();

module.exports = {
  getAvailableCountries: async (req, res) => {
    try {
      const apiEndpoint = process.env.NAGER_API_BASE_URL;
      const response = await axios.get(`${apiEndpoint}/AvailableCountries`);
      res.json(response.data);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "error when obtaining countries",
        error: error.message,
      });
    }
  },
  getCountryInfo: async (req, res) => {
    const { countryCode } = req.params;

    try {
        const countryResponse = await axios.get(
            `${process.env.NAGER_API_BASE_URL}/CountryInfo/${countryCode}`
        );

        const countryInfo = countryResponse.data;

        res.json({
            commonName: countryInfo.commonName,
            officialName: countryInfo.officialName,
            countryCode: countryInfo.countryCode,
            region: countryInfo.region,
            borders: countryInfo.borders ? countryInfo.borders.map(border => ({
                commonName: border.commonName,
                officialName: border.officialName,
                countryCode: border.countryCode,
            })) : []
        });

        
    } catch (error) {
        res.status(500).json({
            message: "Error obtaining country information",
            error: error.message,
        });
    }
},

};
