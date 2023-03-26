import React from "react";
import Button from "./ui/Button";

function Student({ name, age }) {
  return (
    <div className="student">
      <div className="student__left">
        <h3 className="student__name">{name}</h3>
        <p className="student__name">{age}</p>
      </div>
      <div className="student__right">
        <Button variant='danger' className='student__remove'>x</Button>
      </div>
    </div>
  );
}

export default Student;
