import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { usersRouter } from "./routes/users.router.js";
import session from "express-session";
dotenv.config();

mongoose.connect(process.env.MONGO_URI);

const app = express();

app.use(cors({origin: process.env.FRONTEND_ORIGIN, credentials: true}))
app.use(express.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    proxy: true,
    saveUninitialized: false,
    resave: false,
    cookie: {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24,
      // sameSite: "lax",
      // secure: false,
      secure: process.env.NODE_ENV !== "production",
      sameSite: process.env.NODE_ENV !== "production" ? "none" : "lax",
    },
  })
);



app.get("/", (req, res) => {
  res.send(`
  <h2>Welcome to our fullstack Book App!</h2>
  <div>Our routes:<div>
  <div>Home: <a href="/">/</a></div>
  <div>Users: <a href="/users">/users</a></div>
  <div>Books: <a href="/books">/books</a></div>
`);
});

const auth=(req, res, next) => {
  console.log(`SESSION:`, req.session.user);
  if (!req.session.user) {
    return res.status(401).json({
      error: `You have no right!`
    })
  }
  next()
}

app.get("/books", (req, res) => {
  res.json([
    { _id: "b1", title: "Tourist", author: "DD" },
    { _id: "b2", title: "MM", author: "TT" },
  ]);
});

app.use("/users", usersRouter);

app.use((req, res, next) => {
  res.status(404).json({ error: `This route does not exist!` });
});

const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => {
  console.log(`App listenin at http://localhost:` + PORT);
});
