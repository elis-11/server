const mongoose = require("mongoose");

const MONGOURI = `mongodb+srv://elis:elis@cluster0.eoohx.mongodb.net/training?retryWrites=true&w=majority`;

const promConnection = mongoose
  .connect(MONGOURI)
  .then(() => {
    console.log("DB connection established!");
  })
  .catch((err) => {
    console.log("DB connection failed", err.message);
  });

module.exports = promConnection;
