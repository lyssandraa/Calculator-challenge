import { useState } from "react";
import { evaluate } from "mathjs";
import "./App.css";

const App = () => {
  const [sum, setSum] = useState("");
  const buttons = [
    "(",
    ")",
    "C",
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
    "^",
    "=",
    "ANS",
  ];

  const handleClick = (btn) => {
    if (btn === "C") {
      // clear the sum //
      setSum("");
    } else if (btn === "=") {
      try {
        // 3valuate the expression and set the result as the new sum //
        setSum(evaluate(sum).toString());
      } catch (error) {
        // handle any errors that may occur during evaluation //
        setSum("Error");
      }
    } else {
      // append the clicked button value to the sum //
      setSum((prevSum) => prevSum + btn);
    }
  };

  return (
    <div className="app">
      <h2>Special Calculator App</h2>
      <div className="centre">
        <h4 className="inputBox">{sum}</h4>
        <div className="buttonWrap">
          {buttons.map((button, index) => (
            <button
              key={index}
              onClick={() => handleClick(button)}
              className="btn"
            >
              {button}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
