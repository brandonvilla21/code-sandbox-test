import React, { useState } from "react";
import "./styles.css";

function StatefulCounter() {
  const state = useState(0);
  const value = state[0]; // El valor de mi state
  const setState = state[1]; // La funcion para actualizar mi state
  return (
    <div className="App">
      Counter: {value}
      <div>
        <button onClick={() => setState(value + 1)}>Add</button>
        <button onClick={() => setState(value - 1)}>Substract</button>
      </div>
    </div>
  );
}

export default StatefulCounter;
