import React, { useState } from "react";
import ChildComponent1 from "./ChildComponent1";
import ChildComponent2 from "./ChildComponent2";

function App() {
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <div className="parent">
      <h1>Lifting State Up</h1>

      <h2>Selected Option: {selectedOption}</h2>

      <ChildComponent1 setSelectedOption={setSelectedOption} />
      <ChildComponent2 setSelectedOption={setSelectedOption} />
    </div>
  );
}

export default App;