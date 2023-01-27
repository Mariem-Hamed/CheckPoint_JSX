import "./App.css";
import React from "react";
import ProfilePhoto from "./Component/Profile/ProfilePhoto";
import FullName from "./Component/Profile/FullName";
import Adress from "./Component/Profile/Address";

function App() {
  return (
    <div className="App">
      <ProfilePhoto></ProfilePhoto>
      <FullName></FullName>
      <Adress></Adress>
    </div>
  );
}

export default App;
