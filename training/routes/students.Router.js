const express = require("express");

const StudentModel = require("../models/students.Model");

const studentsRouter = express.Router();

// get all
studentsRouter.get("/", async (req, res) => {
  const students = await StudentModel.find();
  res.json(students);
});

// get single student
studentsRouter.get("/:id", async (req, res) => {
  const student = await StudentModel.findById(req.params.id);
  res.json(student);
});

// create new student
studentsRouter.post("/", async (req, res) => {
  const studentNew = await StudentModel.create(req.body);
  res.json(studentNew);
});

// delete student
studentsRouter.delete("/:id", async (req, res) => {
  const studentDelete = await StudentModel.findByIdAndDelete(req.params.id);
  res.json(studentDelete);
});

// update student
studentsRouter.patch("/:id", async (req, res) => {
  const studentUpdate = await StudentModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(studentUpdate);
});

module.exports = studentsRouter;
