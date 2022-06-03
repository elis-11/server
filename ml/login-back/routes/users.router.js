const express = require("express");
const User = require("../models/User");

const usersRouter = express.Router();

// GET ll users route
usersRouter.get("/", async (req, res) => {
  const allUsers = await User.find();
  res.json(allUsers);
});

// POST/users - create / signup new user
usersRouter.post("/", async (req, res)=>{
  const { email}= req.body;

  const existingUser=await User.findOne({ email })
  if (existingUser) return res
  .status(400)
  .json({error: `User with email ${email} already exists`})

  const userNew= await User.create(req.body);
  res.json(userNew);
})

usersRouter.post("/login", async (req, res)=>{
  const { email, password}= req.body;
  console.log(req.body);
  const foundUser = await User.findOne({ email, password,})
  if (!foundUser) return res
  .status(400)
  .json({error: `User does not exist! Try with other email / password.`})
  res.json(foundUser);
})

module.exports = usersRouter;
