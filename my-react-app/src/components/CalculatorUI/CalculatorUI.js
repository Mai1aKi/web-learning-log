// src/CalculatorUI.js
import React from 'react';
import './CalculatorUI.css';

const buttons = [
  ['7', '8', '9', '/'],
  ['4', '5', '6', '*'],
  ['1', '2', '3', '-'],
  ['0', 'C', '=', '+'],
];

function CalculatorUI({ num1, num2, operator, result, onButtonClick }) {
const display = result !== '' ? '= ' + result : `${num1}${operator}${num2}`;
  return (
    <div className="calculator">
      <div className="screen">
        <div className="expression">{display}</div>
      </div>
      <div className="buttons">
        {buttons.map((row, rowIndex) => (
          <div key={rowIndex} className="button-row">
            {row.map((btn) => (
              <button key={btn} onClick={() => onButtonClick(btn)}>
                {btn}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CalculatorUI;