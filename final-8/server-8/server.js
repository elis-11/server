const express = require("express");
const cors = require("cors")
const connection = require("./connect-db");
const usersRouter = require("./routes/users.router");
const teachersRouter = require("./routes/teachers.router");
const studentsRouter = require("./routes/students.router");

const app = express();

// Parse all incoming JSON bodies into req.body variable
// register JSON parser middleare
app.use(express.json());

app.use( cors({origin: 'http://localhost:3000'}) ) // allow accessing our API from the BROWSER!
//! 15:27


//HOME ROUTE
app.get("/", (req, res) => {
  //   res.json(`<h2>Hi</h2>
  res.send(`<h2>Final</h2>
  <a href="/users">Users</a> |
  <a href="/teachers">Teachers</a> |
  <a href="/students">Students</a>
    `);
});

// MINI APIs
app.use("/users", usersRouter);
app.use("/teachers", teachersRouter);
app.use("/students", studentsRouter);

// catch all route => usually used for 404 (=> not found)
app.use((req, res) => {
  res.status(404).json({
    error: "Route not found!",
  });
});

// STARTUP API and listen for incoming requests on PORT 5000
// const PORT = process.env.PORT || 5000;
const PORT = 5008;

app.listen(PORT, () => {
  console.log(`Listen on http://localhost:${PORT}`);
});
