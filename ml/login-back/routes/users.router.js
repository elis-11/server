const express = require("express");
const User = require("../models/User");

const usersRouter = express.Router();

// GET ll users route
usersRouter.get("/", async (req, res) => {
  const allUsers = await User.find();
  res.json(allUsers);
});

module.exports = usersRouter;
