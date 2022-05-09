const express = require("express");
const connection= require("./connect-db")
const studentsRouter= require("./routes/students.Router")


const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send(`<a href='/students'>Students</a>`)
})

app.use("/students", studentsRouter)

app.use((req, res) => {
    res.status(404).json({
        error: 'Router not Found',
    })
})

const PORT= 5002

app.listen(PORT, ()=> {
    console.log(`Listen on http://localhost:${PORT}`);

})