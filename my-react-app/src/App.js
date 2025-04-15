import './App.css';
import { useState } from 'react';
import { calculate } from './calculator';
import CalculatorUI from './CalculatorUI';

// This is a simple calculator app built with React.

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operator, setOperator] = useState('');
  const [result, setResult] = useState('');

  const [isSecondNum, setIsSecondNum] = useState(false);

  const handleButtonClick = (value) => {
    if (!isNaN(value)) {
      // 是数字
      if (!isSecondNum) {
        setNum1(num1 + value); // 继续输入 num1
      } else {
        setNum2(num2 + value); // 继续输入 num2
      }
    } else if (['+', '-', '*', '/'].includes(value)) {
      // 是运算符
      if (num1 !== '') {
        setOperator(value);
        setIsSecondNum(true); // 开始输入第二个数字
      }
    } else if (value === '=') {
      if (num1 && operator && num2) {
        const res = calculate(num1, num2, operator);
        setResult(res);
      }
    } else if (value === 'C') {
      // 清空所有内容
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
export default App;
