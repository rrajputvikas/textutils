import React from "react";
import "./ColorPlate.css";

const ColorPlate = ({ currentMode }) => {
  const applyColor = (event) => {
    const clickedColor = event.target.getAttribute("data-color");
    document.body.style.backgroundColor = clickedColor;
  };

  return (
    <div className="d-flex align-items-center">
      <span
        className={`me-2 d-block ${
          currentMode === "dark" ? "color-plate-in-dark" : "color-plate-in-light"
        }`}
        id="colorPlate"
        onClick={applyColor}
        data-color={currentMode==='dark'? "#042743": "white"}
      ></span>
      <span
        className={`me-2 d-block ${
          currentMode === "dark" ? "color-plate-in-dark" : "color-plate-in-light"
        }`}
        id="colorPlate"
        onClick={applyColor}
        data-color={currentMode==='dark'? "#614a0b": "white"}
      ></span>
      <span
        className={`me-2 d-block ${
          currentMode === "dark" ? "color-plate-in-dark" : "color-plate-in-light"
        }`}
        id="colorPlate"
        onClick={applyColor}
        data-color={currentMode==='dark'? "#015478": "white"}
      ></span>
      <span
        className={`me-2 d-block ${
          currentMode === "dark" ? "color-plate-in-dark" : "color-plate-in-light"
        }`}
        id="colorPlate"
        onClick={applyColor}
        data-color={currentMode==='dark'? "#540931": "white"}
      ></span>
      <span
        className={`me-2 d-block ${
          currentMode === "dark" ? "color-plate-in-dark" : "color-plate-in-light"
        }`}
        id="colorPlate"
        onClick={applyColor}
        data-color={currentMode==='dark'? "#383838": "white"}
      ></span>
    </div>
  );
};

export default ColorPlate;
