import React, { createContext, useState } from "react";

export const StudentContext = createContext(undefined);

export function StudentProvider(props) {
  const [students, setStudent] = useState([
    {
      id: 1,
      name: "mr.x",
      grade: "A",
    },
    {
      id: 2,
      name: "mr.y",
      grade: "B",
    },
    {
      id: 3,
      name: "mr.z",
      grade: "A",
    },
  ]);
  return (
    <StudentContext.Provider value={[students, setStudent]}>
      {props.children}
    </StudentContext.Provider>
  );
}
