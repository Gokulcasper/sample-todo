import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import Contacts from "./Contacts";
import { Names } from "./Names";

const App = () => {
  const [names, setNames] = useState([]);

  let details = {
    name: "Gokul",
    age: "25",
    sports: ["cricket", "foolball", "volleyball", "athlet"],
  };

  const getUserList = async () => {
    let url = "https://jsonplaceholder.typicode.com/users";
    let userList = await axios.get(url);
    setNames(userList.data);
  };

  useEffect(() => {
    getUserList();
  }, []);

  return (
    <div className="App">
      <Names details={details} />
      <br />
      <Contacts names={names} />
      <button onClick={() => window.alert()}>hello</button>
    </div>
  );
};

export default App;
