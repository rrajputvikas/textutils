import React, { useState } from "react";


const TextForm = (props) => {
  
  const upCaseClicked = () => {
    setText(text.toUpperCase());
  }

  const lowCaseClicked = () => {
    setText(text.toLowerCase());
  }
  
  const textChanged = (event) => {
    setText(event.target.value);
  }

  const [text, setText] = useState("your text here...");

  return (
    <>
      <div className="container my-3">
        <div className="mb-3">
          <h1>{props.heading}</h1>
          <textarea
            className="form-control border-danger border-2"
            id="myBox"
            rows="10"
            value={text}
            onChange={textChanged}
          ></textarea>
        </div>
        <button className="btn btn-danger" onClick={upCaseClicked}>Convert to Uppercase</button>
        <button className="btn btn-danger mx-2" onClick={lowCaseClicked}>Convert to Lowercase</button>
      </div>
      <div className="container">
        <h2>Summary</h2>
        <p>{text.length === 0? 0: ((text.split(" ")[text.split(" ").length-1] === "")? text.split(" ").length-1: text.split(" ").length)} Words and {text.length} Characters</p>
        <p>{Math.trunc(0.008 * text.split(" ").length)} min {Math.trunc((0.008 * text.split(" ").length - Math.trunc(0.008 * text.split(" ").length)) * 60)} sec read.</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
};

export default TextForm;
