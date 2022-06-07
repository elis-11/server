const express = require("express");
const User = require("../models/User");

const usersRouter = express.Router();

// GET all users route
usersRouter.get("/", async (req, res) => {
  const usersAll = await User.find();
  res.json(usersAll);
});
// POST/users - create / signup new user
usersRouter.post("/", async (req, res) => {
  const { email } = req.body;

  console.log(`Signup request: `, req.body);

  const existingUser = await User.findOne({ email });

  if (existingUser)
    return res
      .status(400)
      .json({ error: `User with email ${email} already exists` });

  const userNew = await User.create(req.body);
  res.json(userNew);
});

usersRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  const userFound = await User.findOne({
    email: email,
    password,
  });
  if (!userFound)
    return res
      .status(400)
      .json({ error: "User does not exist! Try with other email / password." });
  req.session.user = userFound;
  res.json(userFound);
});

module.exports = usersRouter;
