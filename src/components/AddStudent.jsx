import React, { useContext, useState } from "react";
import Button from "./ui/Button";
import Students from "@components/students";
import { useSelector } from "react-redux";

export default function AddStudent() {
  const students = useSelector(state => state.AllStudent)
  console.log(students)
  const [name, setName] = useState();
  const AddStudent = (e) => {
    e.preventDefault();
    setStudent([...students, { name: name }]);
  };
  return (
    <div className="add-student">
      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        className="add-student__input"
      />
      <Button
        onClick={(e) => AddStudent(e)}
        variant="primary"
        className="add-student__btn"
      >
        Add Student
      </Button>
      {/* <Students /> */}
    </div>
  );
}
