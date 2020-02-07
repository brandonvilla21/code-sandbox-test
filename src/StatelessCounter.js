import React, { useState } from "react";
import "./styles.css";

function StatelessCounter() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <Counter myCounter={counter} />
      <div>
        <button onClick={() => setCounter(counter + 1)}>Add</button>
        <button onClick={() => setCounter(counter - 1)}>Substract</button>
      </div>
    </div>
  );
}

function Counter(props) {
  return <div>Counter: {props.myCounter}</div>;
}

export default StatelessCounter;
