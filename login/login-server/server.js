const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const { connectDb } = require("./db-connect");
const usersRouter = require("./routes/users.router");
const session = require("express-session");

const env = dotenv.config();
console.log("Loaded environment config: ", env);

connectDb();

const app = express();

app.use(cors({ origin: process.env.FRONTEND_ORIGIN, credentials: true }));
app.use(express.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    proxy: true,
    saveUninitialized: false, // saveUninitialized:true = create cookie on each request!
    resave: false,
    cookie: {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24,
      sameSite: "lax",
      secure: false,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none": "lax",
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

// req => requuest => cookie & session & params
// res => for sending a response
// next => next is used to FORQARD a user to the route user wants to access
// if we do not call next => the user will gett stuck / rejected
const auth = (req, res, next) => {
console.log("SESSION:", req.session.user);

  if (!req.session.user) {
    return res.status(401).json({
      error: "[UCH] You have no right!",
    });
  }
  next(); // allow user to move forward to route!
};
app.get("/books", auth, (req, res) => {
  res.json([
    { _id: "b1", title: "Name of the Wind", author: "Jadon Sanderson" },
    { _id: "b2", title: "Die Verwandlung", author: "Franz Kafka" },
    { _id: "b3", title: "Das Glasperlenspiel", author: "Hermann Hesse" },
  ]);
});

app.use("/users", usersRouter);

app.use((req, res, next) => {
  res.status(404).json({ error: "This route does not exist!" });
});

const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => {
  console.log("Server listening at http://localhost:" + PORT);
});
