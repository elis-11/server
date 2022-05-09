const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const studentSchema = new Schema({
  name: { type: String, required: true },
  hobby: { type: String, required: true },
  email: { type: String, required: true },
  city: { type: String, required: true },
});

const StudentModel = model("Student", studentSchema);

module.exports = StudentModel;
