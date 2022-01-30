import getRundomNumber from '../random.js';
import games from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => (number % 2 === 0);

const definitionEvenOrOdd = () => {
  const question = getRundomNumber(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [correctAnswer, question];
};

export default () => games(rules, definitionEvenOrOdd);
