import React, { useState } from "react";

export const TextArea = () => {
  const [data, setData] = useState("");
  React.useEffect(() => {
    fetch("http://localhost:3001/data")
      .then((res) => res.json())
      .then((data) => setData(data.parsedData));
  }, []);
  return <div>TextArea</div>;
};
