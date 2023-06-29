const needle = require("needle");

exports.getlocationByName = (req, res) => {
  try {
    const { cityName, countryCode } = req.params;
    if (cityName) {
      needle.get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${cityName},${countryCode}&appid=${APIkey}`,
        (err, response) => {
          if (err) {
            res.send({
              status: err.cod,
              message: err.message,
            });
          } else {
            res.send({
              status: response.statusCode,
              response: response.data,
            });
          }
        }
      );
    } else {
      res.send({
        status: 400,
        message: "please provide require field",
      });
    }
  } catch (error) {
    res.send({
      status: error.statusCode,
      message: error.message,
    });
  }
};
