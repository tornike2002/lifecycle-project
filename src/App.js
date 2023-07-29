import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import WrongPath from "./components/pages/WrongPath";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<WrongPath />} />
      </Routes>
    </div>
  );
}

export default App;
