import getRundomNumber from './random.js';
import games from '../index.js';

const rules = 'What is the result of the expression?';

const expressinEvaluation = (number1, number2, operand) => {
  switch (operand) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      console.log('operand not difined');
  }
  return undefined;
};

const calc = () => {
  const operands = ['+', '-', '*'];
  const randomNum1 = getRundomNumber(3);
  const randomNum2 = getRundomNumber(3);
  const index = getRundomNumber(3);
  const operand = operands[index];
  const question = `Question: ${randomNum1} ${operand} ${randomNum2}`;
  const resultCalc = expressinEvaluation(randomNum1, randomNum2, operand);
  return [String(resultCalc), question];
};

export default () => games(rules, calc);
