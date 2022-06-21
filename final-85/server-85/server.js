const express = require("express");
const connection = require("./connect-db");
const usersRouter = require("./routes/users.router");
const teachersRouter = require("./routes/teachers.router");
const studentsRouter = require("./routes/students.router");

const app = express();

app.use(express.json());

//HOME ROUTE
app.get("/", (req, res) => {
  //   res.json(`<h2>Hi</h2>
  res.send(`<h2>Final-85</h2>
  <a href="/users">Users</a> |
  <a href="/teachers">Teachers</a> 
    `);
});

// MINI APIs
app.use("/users", usersRouter);
app.use("/teachers", teachersRouter);
app.use("/students", studentsRouter);

app.use((req, res) => {
  res.status(404).json({
    error: "Route not found!",
  });
});

const PORT = 5085;

app.listen(PORT, () => {
  console.log(`Listen on http://localhost:${PORT}`);
});
