const express = require('express');
const routes = require("./routes");

require('dotenv').config();

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  res.setHeader("withCredentials", "*");
  next();
});

app.use(express.json({ limit: '5mb' }));
app.use(express.urlencoded({ extended: false, limit: '5mb' }));

app.use("/", routes);

if (process.env.PORT) {
  app.listen(process.env.PORT);
  console.log('Express started on port ' + process.env.PORT);
}

module.exports = app;
