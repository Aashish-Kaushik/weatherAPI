const needle = require("needle");
exports.weather = (req, res) => {
  res.send({ status: 200, message: "this message from the weather controller" });
};
