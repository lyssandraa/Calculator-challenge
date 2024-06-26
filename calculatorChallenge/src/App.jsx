import { useState, useEffect } from "react";
import { evaluate } from "mathjs";
import "./App.css";

const App = () => {
  const [sum, setSum] = useState(""); // current expression or result //
  const [previousAnswer, setPreviousAnswer] = useState(""); // previous calculated answer //
  const MAX_CHARACTERS = 15;
  const buttons = [
    "(",
    ")",
    "ANS",
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
  ];

  // handles button clicks //
  const handleClick = (btn) => {
    if (btn === "C") {
      // reset sum to empty string //
      setSum("");
    } else if (btn === "=") {
      try {
        const evaluatedResult = evaluate(sum.replace(/ANS/g, previousAnswer));
        // updates sum with evaluated result //
        setSum(evaluatedResult.toString());
        setPreviousAnswer(evaluatedResult.toString());
      } catch (error) {
        // handle any errors that may occur during evaluation //
        setSum("Error");
      }
    } else if (btn === "ANS") {
      // appends previousAnswer to current sum //
      if (sum.length + previousAnswer.length <= MAX_CHARACTERS) {
        setSum((prev) => prev + previousAnswer);
      }
    } else {
      if (sum.length < MAX_CHARACTERS) {
        setSum((prev) => prev + btn);
      }
    }
  };

  // handles keyboard events //
  const handleKeyDown = (event) => {
    const key = event.key;
    if (key === "Enter") {
      handleClick("=");
    } else if (key === "Backspace") {
      setSum((prev) => prev.slice(0, -1));
    } else if (buttons.includes(key) || key.match(/[0-9.]/)) {
      if (sum.length < MAX_CHARACTERS) {
        handleClick(key);
      }
    }
  };

  // effect hook to add eventlistener for keyboard events //
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="app">
      <h2>Special Calculator App</h2>
      <div className="centre">
        <div className="inputBox">
          <div className="sum">{sum}</div>
        </div>
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
