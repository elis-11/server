const express = require("express");
const UserModel = require("../models/users.Model");

const usersRouter = express.Router();

// get all users
usersRouter.get("/", async (req, res) => {
  const users = await UserModel.find();
  res.json(users);
});

// get single user
usersRouter.get("/:id", async (req, res) => {
    const user=await UserModel.findById(req.params.id);
    res.json(user);
})

// Create user
usersRouter.post("/", async (req, res)=>{
    const userNew=await UserModel.create(req.body)
    res.json(userNew);
})

// Delete user
usersRouter.delete("/:id", async (req, res)=>{
const deleteUser=await UserModel.findByIdAndDelete(req.params.id)
res.json(deleteUser);
})

// Update user
usersRouter.patch("/:id", async (req, res)=>{
    const userUpdated=await UserModel.findByIdAndUpdate(req.params.id, req.body, {new:true})
    res.json(userUpdated);
})


module.exports = usersRouter;
