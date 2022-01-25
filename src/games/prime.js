import getRundomNumber from './random.js';
import games from '../index.js';

const isPrime = (number) => {
  for (let divisor = 2; divisor <= number / 2; divisor += 1) {
    if (number % divisor === 0) {
      return false;
    }
  }
  return true;
};

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const prime = () => {
  const number = getRundomNumber(100, 1);
  const question = `Question: ${number}`;
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [correctAnswer, question];
};
export default () => games(rules, prime);
