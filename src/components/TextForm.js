import React, { useState } from "react";


const TextForm = (props) => {
  
  const {heading, mode} = props;

  const upCaseClicked = () => {
    setText(text.toUpperCase());
  }

  const lowCaseClicked = () => {
    setText(text.toLowerCase());
  }

  const copyTextClicked = () => {
    navigator.clipboard.writeText(text);
  }
  
  const textChanged = (event) => {
    setText(event.target.value);
  }

  const [text, setText] = useState("your text here...");

  return (
    <div style={{color: mode === "dark"? "white": "black"}}>
      <div className="container my-3">
        <div className="mb-3">
          <h1>{heading}</h1>
          <textarea
            className="form-control border-danger border-2 shadow"
            id="myBox"
            rows="10"
            value={text}
            onChange={textChanged}
            style={{
              backgroundColor: mode === "dark"? "#959595": "white",
              color: mode === "dark"? "#031c30": "black",
            }}
          ></textarea>
        </div>
        <div className="d-flex justify-content-end">
          <button className="btn btn-danger shadow-sm my-2" onClick={upCaseClicked}>to Uppercase</button>
          <button className="btn btn-danger shadow-sm ms-2 my-2" onClick={lowCaseClicked}> to Lowercase</button>
          <button className="btn btn-danger shadow-sm ms-2 my-2" onClick={copyTextClicked}>Copy Text</button>
        </div>
      </div>
      <div className="container text-warp text-break">
        <h2>Summary</h2>
        <p className="mx-2 font-monospace">{text.length === 0? 0: ((text.split(" ")[text.split(" ").length-1] === "")? text.split(" ").length-1: text.split(" ").length)} Words and {text.length} Characters</p>
        <p className="mx-2 font-monospace">{Math.trunc(0.008 * text.split(" ").length)} min {Math.trunc((0.008 * text.split(" ").length - Math.trunc(0.008 * text.split(" ").length)) * 60)} sec read.</p>
        <h2>Preview</h2>
        <p className="mx-2 font-monospace">{text.length>0? text: "Your output here!"}</p>
      </div>
    </div>
  );
};

export default TextForm;
