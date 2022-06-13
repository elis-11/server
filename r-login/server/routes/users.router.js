import express from "express";
import { User } from "../models/User.js";

export const usersRouter = express.Router();

// Get all users route
usersRouter.get("/", async (req, res) => {
  const usersAll = await User.find();
  res.json(usersAll);
});

usersRouter.get("/me", (req, res)=>{
  if (!req.session.user) {
    return res.status(401).json({
      error: `You are not logged in.`
    })
  }
  res.json(req.session.user);
})

// Post / create users / signup new user
usersRouter.post("/", async (req, res) => {
  const { email } = req.body;
  console.log(`Singup request: `, req.body);

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return res
      .status(400)
      .json({ error: `User with email ${email} already exists` });
  }
  const userNew = await User.create(req.body);
  res.json(userNew);
});

usersRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  const userFound = await User.findOne({
    // email: email,
    email,
    password,
  });
  if (!userFound) {
    return res
      .status(400)
      .json({ error: `User does not exist! Try with other email / password` });
  }
  req.session.user = userFound;
  res.json(userFound);
});

usersRouter.get("/logout", (req, res) => {
  console.log(req.session.user);
  req.session.destroy((err) => {
    res.clearCookie("connect.sid");

    res.json({
      message: `Logged you out successfully`,
    });
  });
});

// export default usersRouter
