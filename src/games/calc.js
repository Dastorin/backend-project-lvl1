import getRundomNumber from './random.js';
import identificationWinOrLoose from '../index.js';

const rules = 'What is the result of the expression?';
const operations = ['+', '-', '*'];

const expressinEvaluation = (number1, number2, operation) => {
  switch (operation) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`operation ${operation} is not supported`);
  }
};

const generateCalc = () => {
  const randomNum1 = getRundomNumber(3);
  const randomNum2 = getRundomNumber(3);
  const index = getRundomNumber(operations.length);
  const operation = operations[index];
  const question = `${randomNum1} ${operation} ${randomNum2}`;
  const resultCalc = expressinEvaluation(randomNum1, randomNum2, operation);
  return [String(resultCalc), question];
};

export default () => identificationWinOrLoose(rules, generateCalc);
