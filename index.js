const mongoose = require("mongoose");

// 1. Connection
mongoose
  .connect("mongodb://localhost/model")

  .then(() => {
    console.log("DB connection established!");
  })
  .catch((err) => {
    console.log("DB connection failed!", err.message);
  });

// 2. Schema => rules for an ITEM
const { Schema, model } = mongoose;

// STUDENT schema (= student ruules)
const studentSchema = new Schema({
  //   name: String,
  //   city: String,
  name: { type: String, required: true },
  city: { type: String },
  age: { type: Number, required: true },
});

// 3. Model => create MANAGER to manage items in DATABASE
// Model will take over all communication with the database for this ITEM
const Student = model("Student", studentSchema); // convert "Student" => students

const addStudent = async () => {
  const studentCreated = await Student.create({
    name: "Gael",
    city: "London",
    age: 27
  });
  console.log(studentCreated);
};
addStudent();
