const express = require("express");
const app = express();
const routeAll = require("./routes");

require("dotenv").config();

const PORT = process.env.PORT || 3000;

app.use(routeAll);
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server running in port ${PORT}`);
});
