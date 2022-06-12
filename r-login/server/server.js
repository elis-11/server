import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import {usersRouter} from "./routes/users.router.js";
dotenv.config();

mongoose.connect(process.env.MONGO_URI)

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send(`
  <h2>Welcome to our fullstack Book App!</h2>
  <div>Our routes:<div>
  <div>Home: <a href="/">/</a></div>
  <div>Users: <a href="/users">/users</a></div>
  <div>Books: <a href="/books">/books</a></div>
`);
});

app.get("/books", (req, res)=>{
  res.json([
    {_id: "b1", title: "Tourist", author: "DD"},
    {_id: "b2", title: "MM", author: "TT"}
  ])
})

app.use("/users", usersRouter)

app.use((req, res, next) => {
  res.status(404).json({error: "This route does not exist!"})
})

const PORT = 5000 || process.env.PORT;
app.listen(PORT, ()=>{
 console.log (`App listenin at http://localhost:` + PORT);
})
