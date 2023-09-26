import React, { useState } from "react";
import Navbar from "../components/Navbar";
import TextForm from "../components/TextForm";
import About from "../components/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [currentMode, setMode] = useState("light");
  const toggle = () => {
    if (currentMode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#ffffff";
    }
  };

  return (
    <>
      <BrowserRouter>
        <Navbar
          title="TextUtils"
          parameter1="light"
          parameter2="dark"
          currentMode={currentMode}
          toggle={toggle}
        />
        <Routes>
          <Route
            path="/textutils"
            element={
              <TextForm
                heading="Input Text"
                parameter2="dark"
                currentMode={currentMode}
              />
            }
          />
          <Route path="/about" element={<About currentMode={currentMode}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
