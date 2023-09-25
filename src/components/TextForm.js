import React, { useState } from "react";
import propTypes from "prop-types";
import ToggleSwitch from "./ToggleSwitch";
import ColorPlate from "./ColorPlate";

const TextForm = ({ heading, parameter2, currentMode }) => {
  const [currentWeight, setWeight] = useState("normal");

  const toggleWeight = () => {
    if (currentWeight === "normal") {
      setWeight("bold");
    } else {
      setWeight("normal");
    }
  };

  const upCaseClicked = () => {
    setText(text.toUpperCase());
  };

  const lowCaseClicked = () => {
    setText(text.toLowerCase());
  };

  const copyTextClicked = () => {
    navigator.clipboard.writeText(text);
  };

  const textChanged = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("your text here...");

  return (
    <div style={{ color: currentMode === parameter2 ? "white" : "black" }}>
      <div className="container my-3">
        <div className="mb-3">
          <div className="d-flex align-items-center justify-content-between">
            <h1>{heading}</h1>
            <ColorPlate currentMode ={currentMode} />
          </div>
          <textarea
            className="form-control border-danger border-2 shadow"
            id="myBox"
            rows="10"
            value={text}
            onChange={textChanged}
            style={{
              backgroundColor: currentMode === parameter2 ? "#959595" : "white",
              color: currentMode === parameter2 ? "#031c30" : "black",
            }}
          ></textarea>
        </div>
        <div className="d-flex justify-content-end">
          <button
            className="btn btn-danger shadow-sm my-2"
            onClick={upCaseClicked}
          >
            to Uppercase
          </button>
          <button
            className="btn btn-danger shadow-sm ms-2 my-2"
            onClick={lowCaseClicked}
          >
            {" "}
            to Lowercase
          </button>
          <button
            className="btn btn-danger shadow-sm ms-2 my-2"
            onClick={copyTextClicked}
          >
            Copy Text
          </button>
        </div>
      </div>
      <div className="container text-warp text-break">
        <h2>Summary</h2>
        <p className="mx-2 font-monospace">
          {text.length === 0
            ? 0
            : text.split(" ")[text.split(" ").length - 1] === ""
            ? text.split(" ").length - 1
            : text.split(" ").length}{" "}
          Words and {text.length} Characters
        </p>
        <p className="mx-2 font-monospace">
          {Math.trunc(0.008 * text.split(" ").length)} min{" "}
          {Math.trunc(
            (0.008 * text.split(" ").length -
              Math.trunc(0.008 * text.split(" ").length)) *
              60
          )}{" "}
          sec read.
        </p>
        <div className="d-flex align-items-center">
          <h2 className="me-3">Preview</h2>
          <ToggleSwitch
            parameter1="normal"
            parameter2="bold"
            currentVal={currentWeight}
            toggle={toggleWeight}
          />
        </div>
        <p className={`mx-2 font-monospace fw-${currentWeight}`}>
          {text.length > 0 ? text : "Your output here!"}
        </p>
      </div>
    </div>
  );
};

TextForm.propTypes = {
  parameter2: propTypes.string.isRequired,
  currentMode: propTypes.string.isRequired,
};

export default TextForm;
