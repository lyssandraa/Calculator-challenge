import { useState, useEffect } from "react";
import { evaluate } from "mathjs";
import "./App.css";

const App = () => {
  const [sum, setSum] = useState("");
  const [previousAnswer, setPreviousAnswer] = useState("");
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

  const handleClick = (btn) => {
    if (btn === "C") {
      // clear the sum //
      setSum("");
    } else if (btn === "=") {
      try {
        const evaluatedResult = evaluate(sum.replace(/ANS/g, previousAnswer));
        setSum(evaluatedResult.toString());
        setPreviousAnswer(evaluatedResult.toString());
      } catch (error) {
        // handle any errors that may occur during evaluation //
        setSum("Error");
      }
    } else if (btn === "ANS") {
      setSum((prev) => prev + previousAnswer);
    } else {
      setSum((prev) => prev + btn);
    }
  };

  const handleKeyDown = (event) => {
    const key = event.key;
    if (key === "Enter") {
      handleClick("=");
    } else if (key === "Backspace") {
      setSum((prev) => prev.slice(0, -1));
    } else if (buttons.includes(key) || key.match(/[0-9.]/)) {
      handleClick(key);
    }
  };

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
