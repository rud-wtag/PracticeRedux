import React, { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "./ui/Button";
import Students from "@components/students";
import { setStudent } from "@redux/actions/StudentAction";
export default function AddStudent() {
  const dispatch = useDispatch();
  const [name, setName] = useState();
  const AddStudent = (e) => {
    e.preventDefault();
    dispatch(setStudent({ name: name }));
  };
  return (
    <div className="add-student">
      <h1>Add Student</h1>
      <form>
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
      </form>
    </div>
  );
}
