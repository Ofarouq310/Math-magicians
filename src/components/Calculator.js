import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({ total: 0, next: null, operation: null });

  const handleClick = (e) => {
    setState(calculate(state, e.target.innerHTML));
  };

  return (
    <div className="calculator">
      <div id="calculator-display">
        {state.total}
        {state.operation}
        {state.next}
      </div>
      <button type="button" onClick={handleClick} className="calculator-key" id="key-clear">AC</button>
      <button type="button" onClick={handleClick} className="calculator-key" id="key-sign">+/-</button>
      <button type="button" onClick={handleClick} className="calculator-key" id="key-percent">%</button>
      <button type="button" onClick={handleClick} className="calculator-key orange-key" id="key-division">÷</button>
      <button type="button" onClick={handleClick} className="calculator-key" id="key-7">7</button>
      <button type="button" onClick={handleClick} className="calculator-key" id="key-8">8</button>
      <button type="button" onClick={handleClick} className="calculator-key" id="key-9">9</button>
      <button type="button" onClick={handleClick} className="calculator-key orange-key" id="key-multiply">x</button>
      <button type="button" onClick={handleClick} className="calculator-key" id="key-4">4</button>
      <button type="button" onClick={handleClick} className="calculator-key" id="key-5">5</button>
      <button type="button" onClick={handleClick} className="calculator-key" id="key-6">6</button>
      <button type="button" onClick={handleClick} className="calculator-key orange-key" id="key-minus">-</button>
      <button type="button" onClick={handleClick} className="calculator-key" id="key-1">1</button>
      <button type="button" onClick={handleClick} className="calculator-key" id="key-2">2</button>
      <button type="button" onClick={handleClick} className="calculator-key" id="key-3">3</button>
      <button type="button" onClick={handleClick} className="calculator-key orange-key" id="key-plus">+</button>
      <button type="button" onClick={handleClick} className="calculator-key" id="key-0">0</button>
      <button type="button" onClick={handleClick} className="calculator-key" id="key-dot">.</button>
      <button type="button" onClick={handleClick} className="calculator-key orange-key" id="key-equals">=</button>
    </div>
  );
};
export default Calculator;
