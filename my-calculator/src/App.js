import React from "react";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import { useState } from "react";
import * as math from "mathjs";

const App = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const addToText = (val) => {
    setText((text) => [...text, val + " "]);
  };

  const resetInput = () => {
    setText("");
    setResult("");
  };

  const calculateResult = () => {
    const input = text.join("");
    setResult(math.evaluate(input));
  };

  const resetValue = () => {
    setText(text.splice(0, text.length - 1));
    setResult("");
  };

  return (
    <div className="App">
      <div className="wrapper">
        <Input text={text} result={result} />
        <div className="Row">
          <Button symbol="Del" color="#d3cdcd" handleClick={resetValue} />
          <Button
            symbol="+/-"
            color="#d3cdcd"
            textColor="white"
            handleClick={addToText}
          />
          <Button
            symbol="%"
            color="#d3cdcd"
            textColor="white"
            handleClick={addToText}
          />
          <Button symbol="/" color="#f2a33c" handleClick={addToText} />
        </div>

        <div className="Row">
          <Button symbol="7" handleClick={addToText} />
          <Button symbol="8" handleClick={addToText} />
          <Button symbol="9" handleClick={addToText} />
          <Button symbol="*" color="#f2a33c" handleClick={addToText} />
        </div>

        <div className="Row">
          <Button symbol="4" handleClick={addToText} />
          <Button symbol="5" handleClick={addToText} />
          <Button symbol="6" handleClick={addToText} />
          <Button symbol="-" color="#f2a33c" handleClick={addToText} />
        </div>

        <div className="Row">
          <Button symbol="1" handleClick={addToText} />
          <Button symbol="2" handleClick={addToText} />
          <Button symbol="3" handleClick={addToText} />
          <Button symbol="+" color="#f2a33c" handleClick={addToText} />
        </div>

        <div className="Row">
          <Button symbol="0" handleClick={addToText} />
          <Button />
          <Button symbol="." handleClick={addToText} />
          <Button symbol="=" color="#f2a33c" handleClick={calculateResult} />
        </div>

        <Button symbol="clear" handleClick={resetInput} />
      </div>
    </div>
  );
};

export default App;
