import { createContext, useEffect, useState } from "react";

export const Context = createContext();

export const DataProvider = (props) => {
  useEffect(() => {
    const fetchData = async () => {
      // Load users
      let response = await fetch(`${process.env.REACT_APP_API_URL}/users`);
      const usersApi = await response.json();
      setUsers(usersApi);

      // Load teachers
      response = await fetch(`${process.env.REACT_APP_API_URL}/teachers`);
      const teachersApi = await response.json();
      setTeachers(teachersApi);
    };
    fetchData();
  }, []);

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

  // Add API FIRST!

  const addTeacher = async (teacherNew) => {
    console.log(teacherNew);
 
    //add teacher at API
    const response = await fetch(`${process.env.REACT_APP_API_URL}/teachers`, {
      method: "POST",
      body: JSON.stringify(teacherNew),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const teacherNewApi = await response.json();
    console.log(teacherNewApi);

    setTeachers([...teachers, teacherNewApi]);

    // const addNewTeacher = {
    //   _id: Date.now().toString(),
    //   ...teacherNew,
    // };
    // setTeachers([...teachers, addNewTeacher]);
  };

  const editTeacher = async (id, teacherData) => {

    //update teacher at API
    await fetch(`${process.env.REACT_APP_API_URL}/teachers/${id}`, {
      method: "PATCH",
      body: JSON.stringify(teacherData),
      headers: { "Content-Type": "application/json" },
    });

    //update teacher at FRONTEND STATE
    const updateTeacher = teachers.map((teacher) =>
      teacher._id === id ? { ...teacher, ...teacherData } : teacher
    );
    setTeachers(updateTeacher);
  };

  const deleteTeacher = async (id) => {

    //delete teacher at API
    await fetch(`${process.env.REACT_APP_API_URL}/teachers/${id}`, {
      method: "DELETE",
    });

    //delete teacher at FRONTEND STATE
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
