import React, { useContext, useState } from "react";
import Button from "@components/ui/Button";
import { StudentContext } from "@context/StudentProvider";

function EditStudent({ studentId, edit, setEdit, editedName }) {
  const [students, setStudent] = useContext(StudentContext);

  const editStudent = (e) => {
    e.preventDefault();
    setEdit((prevState) => !prevState);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const updatedStudents = students.map((student, index) => {
      if (index === studentId) {
        return {
          ...student,
          name: editedName,
        };
      }
      return student;
    });
    setStudent(updatedStudents);
    setEdit(false);
  };

  return (
    <>
      {edit && (
        <Button
          onClick={submitHandler}
          variant="primary"
          className="student__remove"
        >
          ok
        </Button>
      )}
      <Button
        onClick={editStudent}
        variant="primary"
        className="student__remove"
      >
        {edit ? "cancel" : "edit"}
      </Button>
    </>
  );
}

export default EditStudent;
