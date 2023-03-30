import React from "react";
import AddStudent from "../components/AddStudent";
import Students from "@components/Students";

function Home() {
  return (
    <div className="content">
      <AddStudent />
      <Students />
    </div>
  );
}

export default Home;
