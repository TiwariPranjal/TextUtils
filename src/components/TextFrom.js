
import React, { useState } from 'react';

export default function TextFrom(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "Success");
  };

  const handleLowerClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "Success");
  };

  const handleClearClick = () => {
    setText("");
    props.showAlert("Text Cleared", "Success");
  };

  const handleCopy = () => {
    // Check for selected text
    const selectedText = window.getSelection().toString();
    if (selectedText) {
      navigator.clipboard.writeText(selectedText)
        .then(() => props.showAlert("Selected Text Copied", "Success"))
        // .catch(err => props.showAlert("Failed to Copy Text", "Error"));
    } else {
      // If no text is selected, copy all text from textarea
      navigator.clipboard.writeText(text)
        .then(() => props.showAlert("All Text Copied", "Success"))
        // .catch(err => props.showAlert("Failed to Copy Text", "Error"));
    }
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className='container'>
        <h1 className="mb-3"style={{ color: props.mode === "dark" ? "white" : "black" }}>{props.heading}</h1>
        <div className="mb-3">
          <textarea 
            className="form-control" 
            value={text} 
            onChange={handleOnChange} 
            style={{ backgroundColor: props.mode === "dark" ? "gray" : "white", color: props.mode === 'dark' ? 'white' : 'black' }} 
            id="myBox" 
            rows="6" 
            placeholder="Enter your text here">
          </textarea>
        </div>

        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>
          Convert To Uppercase
        </button>
        
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleLowerClick}>
          Convert To Lowercase
        </button>

        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleClearClick}>
          Clear Text
        </button>

        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleCopy}>
          Copy Text
        </button>
      </div>

      <div className="container my-3" style={{ color: props.mode === "dark" ? "white" : "black" }}>
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter(Boolean).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(/\s+/).filter(Boolean).length} minutes to read</p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Enter something in the text area"}</p>
      </div>
    </>
  );
}

