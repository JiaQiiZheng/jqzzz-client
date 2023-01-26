import "./App.css";
import React from "react";
import { json, Link, Route, Routes } from "react-router-dom";

import Header from "./components/Header/App";
import Task from "./components/TaskList/App";
import Register from "./components/Regiser/App";
import Login from "./components/Login/App";
import Home from "./components/Home/App";
import About from "./components/About/App";
import Works from "./components/Work/App";
import Work_Apalachicola from "./components/Work/Work_Apalachicola";

export default function App() {
  return (
    <div className="App-layout">
      <div>
        <Header />
      </div>
      <div className="section">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="works">
            <Route index element={<Works />} />
            <Route path="work_Apalachicola" element={<Work_Apalachicola />} />
          </Route>
          <Route path="Register" element={<Register />} />
          <Route path="Auth" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}
