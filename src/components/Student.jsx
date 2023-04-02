import React, { useContext, useState } from "react";
import Button from "@components/ui/Button";
import { StudentContext } from "@context/StudentProvider";
import EditStudent from "./EditStudent";

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
  const handleChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
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
        <EditStudent
          studentId={studentId}
          edit={edit}
          setEdit={setEdit}
          editedName={editedName}
        />
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
