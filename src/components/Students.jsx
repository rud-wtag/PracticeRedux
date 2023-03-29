import React, { useContext } from "react";
import Student from "./Student";
import { StudentContext } from "../context/StudentProvider";
import { useSelector } from "react-redux";

function Students() {
  const students = useSelector((state) => state.AllStudent.students);
  console.log(students);
  return (
    <>
      {students.map((student, index) => (
        <Student key={student.id} name={student.name} studentId={student.id} />
      ))}
    </>
  );
}

export default Students;
