const express = require("express");
const User = require("../models/User");

const usersRouter = express.Router();

// get all users
usersRouter.get("/", async (req, res) => {
  const usersAll = await User.find();
  res.json(usersAll);
});

// create new user / sign up
usersRouter.post('/', async (req, res) => {
    const {email} = req.body

    const existingUser=await User.findOne({email})

    if (existingUser)
    return res.status(404).json({error: `User with email ${email} already exists`})

    const userNew = await User.create(req.body);
    res.json(userNew);
})

// login user
usersRouter.post('/login', async (req, res)=>{
    const { email, password} = req.body
    console.log(req.body);
    const userFound=await User.findOne({email, password})
if (!userFound){
    return res
    .status(400)
    .json({error: `User does not exist`})
}
res.json(userFound);
})


module.exports = usersRouter;
