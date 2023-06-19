import "./App.css";
import Header from "./component/Header";
import Section from "./component/Section";
import { useState, useEffect } from "react";
import { getData } from "./script/fetch";
function App() {
  return (
    <div className="App">
      <Header />
      <Section />
    </div>
  );
}

export default App;
