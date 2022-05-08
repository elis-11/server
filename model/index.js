const mongoose = require("mongoose");

// 1. Connection
mongoose
  // .connect("mongodb://localhost/model")
  .connect("mongodb+srv://elis:elis@cluster0.eoohx.mongodb.net/model?retryWrites=true&w=majority")

  .then(() => {
    console.log("DB connection established!");
  })
  .catch((err) => {
    console.log("DB connection failed!", err.message);
  });

// 2. Schema => rules for an ITEM
const { Schema, model } = mongoose;

// TEACHER schema (= teacher ruules)
const teacherSchema = new Schema({
  //   name: String,
  //   city: String,
  name: { type: String, required: true },
  city: { type: String },
  age: { type: Number, required: true },
});

// 3. Model => create MANAGER to manage items in DATABASE
// Model will take over all communication with the database for this ITEM
const Teacher = model("Teacher", teacherSchema); // convert "teacher" => teachers

const addteacher = async () => {
  const teacherCreated = await Teacher.create({
    name: "Luis",
    city: "Berlin",
    age: 37
  });
  console.log(teacherCreated);
};
addteacher();
