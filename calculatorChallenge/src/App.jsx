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
    "C",
  ];

  const handleClick = (btn) => {
    if (btn === "C") {
      // Clear the sum
      setSum("");
    } else if (btn === "=") {
      try {
        // Evaluate the expression and set the result as the new sum
        setSum(evaluate(sum).toString());
      } catch (error) {
        // Handle any errors that may occur during evaluation
        setSum("Error");
      }
    } else {
      // Append the clicked button value to the sum
      setSum((prevSum) => prevSum + btn);
    }
  };

  return (
    <div className="centre">
      <h2>Special Calculator App</h2>
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
  );
};

export default App;
