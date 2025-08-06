import React, { useState } from "react";

export default function TextForm(props) {
  const handleUPclick = () => {
    // console.log("Uppercase was Clicked" + text)
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!", "success")

  };
  const handleLowclick = () => {
    // console.log("Uppercase was Clicked" + text)
    let newText = text.toLowerCase();
    setText(newText);
        props.showAlert("Converted to Lowercase!", "success")

  };
  const handleClearclick = () => {
    // console.log("Uppercase was Clicked" + text)
    let newText = "";
    setText(newText);
        props.showAlert("Text cleared!", "success")
  };
  const handleOnChange = (event) => {
    // console.log("Handle on change")
    setText(event.target.value);
  };

  const speak = () => {
  let msg = new SpeechSynthesisUtterance();
  msg.text = text;
  msg.lang = "hi-IN";
  window.speechSynthesis.speak(msg);
      props.showAlert("Listen now", "success")

}

  const [text, setText] = useState("");
  //  text="new text" // wrong way too change the state
  // setText=("new text"); // correct way too change the state
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            name=""
            placeholder="write here..."
            value={text}
            onChange={handleOnChange}
            id="myBox"
            className="form-control"
            rows="8"
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary  mx-1 my-1 " onClick={handleUPclick}>
          Convert to UpperCase
        </button>
        <button disabled={text.length===0} className="btn btn-primary  mx-1 my-1 " onClick={handleLowclick}>
          Convert to LowerCase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1 " onClick={handleClearclick}>
          Clear Text
        </button>
        <button disabled={text.length===0} type="submit" onClick={speak} className="btn btn-warning mx-1 my-1  my-1">Speak</button>
      </div>
      <div className="container my-3">
        <h2>Your Text Count :- </h2>
        <p>
          {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words & {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h2>Preview Your text</h2>
        <p>{text.length>0?text:"Nothing to preview"}</p>
      </div>
    </>
  );
}
