import getRundomNumber from './random.js';
import games from '../index.js';

const isEven = (number) => (number % 2 === 0);

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const definitionEvenOrOdd = () => {
  const randomNumber = getRundomNumber(100);
  const question = `Question: ${randomNumber}`;
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return [correctAnswer, question];
};

export default () => games(rules, definitionEvenOrOdd);
