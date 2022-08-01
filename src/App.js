import React, { Component } from "react";
import "./App.css";
import { Names } from "./Names";

const App = () => {
  let name = "muthu";
  let age = 33;
  let details = {
    name: "Gokul",
    age: "25",
    sports: ["cricket", "foolball", "volleyball", "athlet"],
  };
  return (
    <div className="App">
      <Names details={details} />
    </div>
  );
};

export default App;
