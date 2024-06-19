import { useState } from "react";
import { evaluate } from "mathjs";
import "./App.css";

const App = () => {
  const [sum, setSum] = useState("");
  const buttons = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "-",
    "+",
    "*",
    "/",
    "=",
  ];

  const handleClick = (btn) => {
    // If user enters =
    // Pass the sum into the evaluate function
    // The Evaluate answer becomes sum after setSum is given the above
    console.log(btn);
  };

  return (
    <div className="centre">
      <h2>Lysandra's Caluclator App</h2>
      <h4 className="inputBox">{sum}</h4>
      <div className="buttonWrap">
        {buttons.map((button, index) => {
          return (
            <button
              key={index}
              onClick={() => handleClick(button)}
              className="btn"
            >
              {button}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default App;
