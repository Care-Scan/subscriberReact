import React from "react";

export default function ImageArea(props) {
  return (
    <div className="img-area split-screen">
      <h1>Patient Handwritten Form</h1>
      <div className="img-holder">
        <img src="http://localhost:4000/test.png" alt="sampleImg" />
      </div>
    </div>
  );
}
