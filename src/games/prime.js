import getRundomNumber from './random.js';
import identificationWinOrLoose from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let divisor = 2; divisor <= number / 2; divisor += 1) {
    if (number % divisor === 0) {
      return false;
    }
  }
  return true;
};

const generatePrime = () => {
  const number = getRundomNumber(100, 1);
  const question = `${number}`;
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [correctAnswer, question];
};

export default () => identificationWinOrLoose(rules, generatePrime);
