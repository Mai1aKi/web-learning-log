export function calculate(num1, num2, operator){
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    if (isNaN(a) || isNaN(b)) return 'Invalid Number';

    switch(operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return b !== 0 ? a / b : 'Error: Division by zero';
        default:
            return 'Invalid Operator';
    }
}