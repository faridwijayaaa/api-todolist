const express = require("express");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 3000;

app.use("/", (req, res) => {
  res.json("Sucessfully server running");
});

app.listen(PORT, () => {
  console.log(`Server running in port ${PORT}`);
});
