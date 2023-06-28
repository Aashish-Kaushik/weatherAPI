const needle = require("needle");
exports.getlocationByPincode = async (req, res) => {
  try {
    const { postCode, countryCode = "IN" } = req.body;

    if (postCode) {
      await needle.get(`http://api.openweathermap.org/geo/1.0/zip?zip=${zipCode},${countryCode}&appid=${APIkey}`, (err, response) => {
        if (err) {
          res.send({
            status: err.cod,
            message: err.message
          })
        } else {
          res.send({
            status: 200,
            response: response.data
          })
        }

      });
    }
    else {
      res.send({
        status: 400,
        message: "please provide required field"
      })
    }

  } catch (error) {
    res.send({
      status: error.statusCode,
      message: error.message
    })

  }

};
