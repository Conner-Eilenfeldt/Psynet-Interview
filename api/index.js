const express = require('express');
const routes = require("./routes");

require('dotenv').config();

const app = express();

app.use(express.json({ limit: '5mb' }));
app.use(express.urlencoded({ extended: false, limit: '5mb' }));

app.use("/", routes);

if (process.env.PORT) {
  app.listen(process.env.PORT);
  console.log('Express started on port ' + process.env.PORT);
}

module.exports = app;
