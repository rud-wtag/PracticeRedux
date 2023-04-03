import Button from "@components/ui/Button";
import React from "react";
import Student from "../components/Student";
import AddStudent from "../components/AddStudent";

function Home() {
  return (
    <div className="content">
      <h1>Student list</h1>
      <AddStudent />
    </div>
  );
}

export default Home;
