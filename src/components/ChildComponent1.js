import React from "react";

function ChildComponent1({ setSelectedOption }) {
  return (
    <div>
      <button onClick={() => setSelectedOption("Option 1")}>
        Select Option 1
      </button>
    </div>
  );
}

export default ChildComponent1;