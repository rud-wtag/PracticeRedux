import React, { useContext } from "react";
import Student from "./Student";
import { StudentContext } from "../context/StudentProvider";
import { useSelector } from "react-redux";

function Students() {
  const students = useSelector((state) => state.AllStudent.students);
  console.log(students);
  return (
    <div className="students">
      {students.map((student, index) => (
        <Student key={student.id} name={student.name} grade={student?.grade} studentId={student.id} />
      ))}
    </div>
  );
}

export default Students;
