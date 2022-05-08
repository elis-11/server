const mongoose = require("mongoose");

const DB_NAME = "backend";
const MONGOURI = `mongodb+srv://elis:elis@cluster0.eoohx.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

const promConnection = mongoose
  .connect(MONGOURI)
  .then(() => {
    console.log("DB connection established!");
  })
  .catch((err) => {
    console.log("DB connection failed", err.message);
  });

module.exports = promConnection;
