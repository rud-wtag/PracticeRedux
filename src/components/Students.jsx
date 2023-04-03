import React, { useContext } from "react";
import Student from "./Student";
import { StudentContext } from "../context/StudentProvider";

function Students() {
  const [students] = useContext(StudentContext);
  console.log(students);
  return (
    <>
      {students.map((student, index) => (
        <Student key={index} name={student.name} studentId = {index} />
      ))}
    </>
  );
}

export default Students;
