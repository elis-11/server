const dotenv = require("dotenv");
const express = require("express");
const { connectDb } = require("./db-connect");
const usersRouter = require("./routes/users.router");

const env = dotenv.config();
console.log("Loaded environment config: ", env);

connectDb();

const app = express();

app.use(express.json())

app.get("/", (req, res) => {
  res.send(`
    <h2>Welcome to our fullstack Book App!</h2>
    <div>Our routes:<div>
    <div>Home: <a href="/">/</a></div>
    <div>Users: <a href="/users">/users</a></div>
    <div>Books: <a href="/books">/books</a></div>
    `);
});

// app.get('/users', (req, res)=>{
//   res.json([
//     {_id: 'u1', name: 'Rob', email: 'rob@gmail.com', password: 'rob'}
//   ])
// })
app.use("/users", usersRouter)

app.get("/books", (req, res) => {
  res.json([
    { _id: "b1", title: "Tourist", author: "KL" },
  ]);
});

app.use((req, res, next) => {
  res.status(404).json({ error: "This route does not exist" });
});


const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => {
  console.log("Server listening at http://localhost:" + PORT);
});
