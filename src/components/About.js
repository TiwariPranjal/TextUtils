import React, { useState } from 'react';

export default function About() {

    const[myStyle, setMyStyle] = useState({
        color: "white",
        backgroundColor: "black",
    });
    const [button, setButton] = useState("Enable Light Mode");

    const toggleStyle = () => {
        if (myStyle.color === "white") {
            setMyStyle({
                color: "black",
                backgroundColor: "white",
            });
            setButton("Enable Dark Mode");
        } else {
            setMyStyle({
                color: "white",
                backgroundColor: "black",
            });
            setButton("Enable Light Mode");
        }
    };

    let middle = {
        display: "flex",
        justifyContent: "center", /* Align items horizontally */
        alignItems: "center",
    };

    return (
        <div className='container' style={myStyle}>
            <h1 className='my-3' style={middle}>About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>About TextUtils</strong> TextUtils is a powerful tool designed for text manipulation and analysis. It allows users to convert text to uppercase, lowercase, and perform various other text-related operations with ease. The platform is built to enhance your productivity and streamline your text handling tasks, making it an essential tool for anyone working with text data.
                        </div>
                    </div>
                </div>

                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>Features</strong> Our platform provides a range of features including text transformation, word count, and character count. It is designed to be user-friendly and efficient, helping you manage and analyze text data quickly and effectively.
                        </div>
                    </div>
                </div>

                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>Get Started</strong> To get started with TextUtils, simply enter your text into the provided text area and use the available tools to manipulate and analyze your text. Enjoy the ease and efficiency of our platform for all your text-related needs.
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-3">
                <button type="button" className="btn btn-primary" onClick={toggleStyle} style={{ marginBottom: '20px', marginLeft: "0px" }}>{button}</button>
            </div>
        </div>
    );
}
