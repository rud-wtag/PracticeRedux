import React, { useContext, useState } from "react";
import Button from "@components/ui/Button";
import { StudentContext } from "@context/StudentProvider";

function Student({ name, age, studentId }) {
  const [students, setStudent] = useContext(StudentContext);
  const [edit, setEdit] = useState(false);
  const [editedName, setName] = useState(name);
  const removeStudent = (e) => {
    e.preventDefault();
    const filteredStudents = students.filter(
      (student, index) => index !== studentId
    );
    setStudent(filteredStudents);
  };
  const editStudent = (e) => {
    e.preventDefault();
    setEdit((prevState) => !prevState);
  };
  const handleChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
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
    <div className="student">
      <div className="student__left">
        {!edit ? (
          <h3 className="student__name">{name}</h3>
        ) : (
          <input type="text" value={editedName} onChange={handleChange} />
        )}
        <p className="student__name">{age}</p>
      </div>
      <div className="student__right">
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
        <Button
          onClick={removeStudent}
          variant="danger"
          className="student__remove"
        >
          x
        </Button>
      </div>
    </div>
  );
}

export default Student;
