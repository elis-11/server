const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB connection successful");
  } catch (err) {
    console.error("Connection failed!", err.message);
  }
};

module.exports = { connectDb };
