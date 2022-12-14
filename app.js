const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT;

app.listen(port, () => {
  console.log(
    `Server listening on port ${port} in ${process.env.NODE_ENV} mode`
  );
});
