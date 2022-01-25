import games from '../index.js';

const rules = 'What is the result of the expression?';

const expressinEvaluation = (num1, operand, num2) => {
  let result = 0;
  switch (operand) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
      console.log('operand not difined');
  }
  return result;
};

const calc = () => {
  const operands = ['+', '-', '*'];
  const randomNum1 = Math.floor(Math.random() * 3);
  const randomNum2 = Math.floor(Math.random() * 3);
  const i = Math.floor(Math.random() * 3);
  const question = `Question: ${randomNum1} ${operands[i]} ${randomNum2}`;
  const resultCalc = expressinEvaluation(randomNum1, operands[i], randomNum2);
  return [String(resultCalc), question];
};

export default () => games(rules, calc);
