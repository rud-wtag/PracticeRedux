import React, { useContext, useState } from "react";
import Button from "./ui/Button";
import { StudentContext } from "@context/StudentProvider";
import Students from "@components/students";

export default function AddStudent() {
  const [students, setStudent] = useContext(StudentContext);
  const [name, setName] = useState();
  console.log(name);
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
      <Students />
    </div>
  );
}
