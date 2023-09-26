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
        data-color={currentMode==='dark'? "#042743": "#A8CCE8"}
        ></span>
      <span
        className={`me-2 d-block ${
          currentMode === "dark" ? "color-plate-in-dark" : "color-plate-in-light"
        }`}
        id="colorPlate"
        onClick={applyColor}
        data-color={currentMode==='dark'? "#330b61": "#A999D2"}
      ></span>
      <span
        className={`me-2 d-block ${
          currentMode === "dark" ? "color-plate-in-dark" : "color-plate-in-light"
        }`}
        id="colorPlate"
        onClick={applyColor}
        data-color={currentMode==='dark'? "#015478": "#6deff1"}
      ></span>
      <span
        className={`me-2 d-block ${
          currentMode === "dark" ? "color-plate-in-dark" : "color-plate-in-light"
        }`}
        id="colorPlate"
        onClick={applyColor}
        data-color={currentMode==='dark'? "#540931": "#DDB0C0"}
      ></span>
      <span
        className={`me-2 d-block ${
          currentMode === "dark" ? "color-plate-in-dark" : "color-plate-in-light"
        }`}
        id="colorPlate"
        onClick={applyColor}
        data-color={currentMode==='dark'? "#383838": "#fff"}
      ></span>
    </div>
  );
};

export default ColorPlate;
