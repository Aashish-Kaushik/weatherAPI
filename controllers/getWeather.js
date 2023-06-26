const needle = require("needle");
exports.weather = (req, res) => {
  try {
    const { lon, lat } = req.query
    if (lon && lat) {
      needle.get(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${APIkey}`, (error, response) => {
        if (error) {
          res.send({
            status: error.statusCode,
            message: error.message
          })
        } else {
          res.send({
            status: response.statusCode,
            response: response.body
          })
        }
      })
    } else {
      res.send({ status: 400, message: "please provide required parameters" });
    }
  } catch (err) {
    res.send({
      status: err.statusCode,
      message: err.message
    })

  }
};






