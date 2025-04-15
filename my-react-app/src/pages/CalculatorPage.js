import React, { useState } from 'react';
import { calculate } from '../utils/calculator';
import CalculatorUI from '../components/CalculatorUI/CalculatorUI';

function CalculatorPage() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operator, setOperator] = useState('');
  const [result, setResult] = useState('');
  const [isSecondNum, setIsSecondNum] = useState(false);

  const handleButtonClick = (value) => {
    if (!isNaN(value)) {
      if (!isSecondNum) {
        setNum1(num1 + value);
      } else {
        setNum2(num2 + value);
      }
    } else if (['+', '-', '*', '/'].includes(value)) {
      if (num1 !== '') {
        setOperator(value);
        setIsSecondNum(true);
      }
    } else if (value === '=') {
      if (num1 && operator && num2) {
        const res = calculate(num1, num2, operator);
        setResult(res);
      }
    } else if (value === 'C') {
      setNum1('');
      setNum2('');
      setOperator('');
      setResult('');
      setIsSecondNum(false);
    }
  };

  return (
    <CalculatorUI
      num1={num1}
      num2={num2}
      operator={operator}
      result={result}
      onButtonClick={handleButtonClick}
    />
  );
}

export default CalculatorPage;
