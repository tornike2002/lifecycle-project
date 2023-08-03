import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import WrongPath from "./components/pages/WrongPath";
import "./App.css";
import About from "./components/pages/About";
import Exhibitions from "./components/pages/Exhibitions";
import Contact from "./components/pages/Contact";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/exhibitions" element={<Exhibitions />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<WrongPath />} />
      </Routes>

    </div>
  );
}

export default App;
