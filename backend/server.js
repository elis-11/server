const express = require("express");
const connection = require("./connect-db");
const usersRouter=require("./routes/users.router")

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send(`<a href="/users">Users</a>`);
});

app.use("/users", usersRouter)

app.use((req, res) => {
  res.status(404).json({
    error: "Route not found",
  })
})

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Listen on http://localhost:${PORT}`);
});
