import getRundomNumber from './random.js';
import identificationWinOrLoose from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';

const isGcd = (number1, number2) => {
  let result = 0;
  for (let index = 1; index <= Math.min(number1, number2); index += 1) {
    if (number1 % index === 0 && number2 % index === 0) {
      result = index;
    }
  }
  return result;
};

const generateGreatestCommonDivisor = () => {
  const randomNumber1 = getRundomNumber(20, 1);
  const randomNumber2 = getRundomNumber(20, 1);
  const question = `${randomNumber1} ${randomNumber2}`;
  const correctAnswer = isGcd(randomNumber1, randomNumber2);
  return [String(correctAnswer), question];
};

export default () => identificationWinOrLoose(rules, generateGreatestCommonDivisor);
