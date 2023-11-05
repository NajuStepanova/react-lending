import { Routes, Route } from "react-router-dom";
import Main from "./component/Main";
import About from "./component/About";
import Vacan from "./component/Vacan";
import WorkCond from "./component/WorkСond";
import React from "react";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Main />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/vacan" element={<Vacan />} />
      <Route exact path="/workcond" element={<WorkCond />} />
    </Routes>
  );
}

export default App;
