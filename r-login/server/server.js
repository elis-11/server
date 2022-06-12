import dotenv from "dotenv";
import express from "express";

const env = dotenv.config();
console.log("Loaded environment config: ", env);

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
const PORT = 5000 || process.env.PORT;
app.listen(PORT, ()=>{
 console.log (`App listenin at http://localhost:` + PORT);
})
