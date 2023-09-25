import React, { useState } from "react";
import Navbar from "../components/Navbar";
import TextForm from "../components/TextForm";

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
      <Navbar
        title="TextUtils"
        parameter1="light"
        parameter2="dark"
        currentMode={currentMode}
        toggle={toggle}
      />
      <TextForm
        heading="Input Text"
        parameter2="dark"
        currentMode={currentMode}
      />
    </>
  );
}

export default App;
