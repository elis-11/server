const express = require("express");
const User = require("../models/User");

const usersRouter = express.Router();


// GET all users route
usersRouter.get("/", async (req, res) => {
    const usersAll= await User.find()
      res.json( usersAll);
    });
    
    // POST/users - create / signup new user
usersRouter.post("/", async (req, res) => {
  console.log(req.body);

const userNew= await User.create(req.body)

res.json(userNew);
})
module.exports = usersRouter;