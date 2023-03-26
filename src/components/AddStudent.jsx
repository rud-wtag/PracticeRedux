import React from "react";
import Student from "./Student";
import Button from "./ui/Button";

export default function AddStudent() {
  return (
    <div className="add-student">
      <input type="text" className="add-student__input" />
      <Button variant="primary" className="add-student__btn">
        Add Student
      </Button>
      <Student name="x" age="45" />
      <Student name="x" age="45" />
      <Student name="x" age="45" />
      <Student name="x" age="45" />
    </div>
  );
}
