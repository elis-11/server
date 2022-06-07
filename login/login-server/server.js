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
      // secure: process.env.NODE_ENV === "production",
      // sameSite: process.env.NODE_ENV === "production" ? "none": "lax",
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

app.get("/books", (req, res) => {
  res.json([
    { _id: "b1", title: "Name of the Wind", author: "Jadon Sanderson" },
    { _id: "b2", title: "Die Verwandlung", author: "Franz Kafka" },
    { _id: "b3", title: "Das Glasperlenspiel", author: "Hermann Hesse" },
  ]);
});

app.use("/users", usersRouter);

app.use((req, res, next) => {
  res.status(404).json({ error: "This route does not exist" });
});

const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => {
  console.log("Server listening at http://localhost:" + PORT);
});
