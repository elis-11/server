import express from "express";
import {User} from "../models/User.js";

export const usersRouter = express.Router();

// Get all users route
usersRouter.get("/", async (req, res) => {
    const usersAll=await User.find()
    res.json(usersAll)
})

// export default usersRouter