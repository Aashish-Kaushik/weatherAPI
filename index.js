const express = require("express");
const app = express();
const routerPath = require("./routes/weather");
const rateLimit = require("express-rate-limit");
const PORT = process.env.PORT || 3000;
const routenotFound = require("./middleware/routeerror");

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

// middleware
app.use(apiLimiter);
// router
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});
app.use("/api/v1", routerPath);

app.use(routenotFound);
app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});
