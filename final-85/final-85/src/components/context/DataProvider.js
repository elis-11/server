import { createContext, useState } from "react";

export const Context = createContext();

export const DataProvider = (props) => {
  const [users, setUsers] = useState([
    {
      _id: "1",
      name: "Gael",
      profession: "Web Dev Consultant",
      hobby: "playing computer games",
      email: "gael@gmail.com",
      city: "Berlin",
    },
    { 
      _id: "2",
      name: "Robert",
      profession: "Web Dev Trainer",
      hobby: "reading",
      email: "robert@gmail.com",
      city: "Berlin",
    },
    {
      _id: "3",
      name: "Elisa",
      profession: "JavaScript Engineer",
      hobby: "JavaScript",
      email: "elisa@gmail.com",
      city: "Hamburg",
    },
  ]);
  const [teachers, setTeachers] = useState([
    { _id: "1", name: "Robert", city: "Berlin" },
    { _id: "2", name: "Marlene", city: "Hamburg" },
    { _id: "3", name: "Olaf", city: "Hamburg" },
    { _id: "4", name: "Julian", city: "Berlin" },
    { _id: "5", name: "Heiko", city: "Hamburg" },
    { _id: "6", name: "Gael", city: "Berlin" },
  ]);
  const [students, setStudents] = useState([
    { _id: "1", name: "Niko", specialization: "Full Stack" },
    { _id: "2", name: "Heba", specialization: "Full Stack" },
    { _id: "3", name: "Osama", specialization: "Backend" },
    { _id: "4", name: "Elisa", specialization: "Frontend" },
    { _id: "5", name: "Stephan", specialization: "Full Stack" },
  ]);
  const addTeacher = (teacherNew) => {
    const addNewTeacher = {
      id: Date.now().toString(),
      ...teacherNew,
    };
    setTeachers([...teachers, addNewTeacher]);
  };

  const editTeacher = (id, teacherData) => {
    const updateTeacher = teachers.map((teacher) =>
      teacher._id === id ? { ...teacher, ...teacherData } : teacher
    );
    setTeachers(updateTeacher);
  };
  const deleteTeacher = (id) => {
    const deleteTeacher = teachers.filter((teacher) => teacher._id !== id);
    setTeachers(deleteTeacher);
  };

  const sharedData = {
    users,
    teachers,
    students,
    setUsers,
    setTeachers,
    setStudents,
    addTeacher,
    editTeacher,
    deleteTeacher,
  };

  return (
    <Context.Provider value={sharedData}>{props.children}</Context.Provider>
  );
};
