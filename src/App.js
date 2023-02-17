import React, { useState } from "react";
import ImageArea from "./components/ImageArea";
import EditArea from "./components/EditArea";

export default function App() {
 
  return (
    <div className="container">
      <ImageArea />
      {/* <EditArea data={parsedData1} /> */}
      <EditArea />
    </div>
  );
}
