import getRundomNumber from '../random.js';
import identificationWinOrLoose from '../index.js';

const rules = 'What number is missing in the progression?';

const question = (start, count, step, hiddenIndex) => {
  const result = [];
  for (let index = 0; index < count; index += 1) {
    result.push(start + (step * index));
  }
  result[hiddenIndex] = '..';
  return result.join(' ');
};

const generateProgression = () => {
  const start = getRundomNumber(0, 100);
  const length = getRundomNumber(5, 10);
  const step = getRundomNumber(1, 20);
  const hiddenIndex = getRundomNumber(0, length - 1);
  const correctAnswer = start + step * (hiddenIndex);
  return [String(correctAnswer), question(start, length, step, hiddenIndex)];
};

export default () => identificationWinOrLoose(rules, generateProgression);
