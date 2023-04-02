import React, { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "./ui/Button";
import { setStudent } from "@redux/actions/StudentAction";
export default function AddStudent() {
  const dispatch = useDispatch();
  const [name, setName] = useState();
  const [grade, setGrade] = useState();
  const AddStudent = (e) => {
    e.preventDefault();
    dispatch(setStudent({ name: name, grade: grade }));
  };
  return (
    <div className="add-student">
      <h1>Add Student</h1>
      <label>Student Name: </label>
      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        className="add-student__input"
        placeholder="Enter name"
      />
      <label>Student Grade: </label>
      <input
        onChange={(e) => setGrade(e.target.value)}
        type="text"
        className="add-student__input"
        placeholder="Enter grade"
      />
      <Button
        onClick={(e) => AddStudent(e)}
        variant="primary"
        className="add-student__btn"
      >
        Add Student
      </Button>
    </div>
  );
}
