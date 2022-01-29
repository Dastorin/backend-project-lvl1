import getRundomNumber from './random.js';
import identificationWinOrLoose from '../index.js';

const rules = 'What number is missing in the progression?';

const getProgression = (start, count, step, hiddenIndex) => {
  const progression = [];
  for (let index = 0; index < count; index += 1) {
    progression.push(start + (step * index));
  }
  const correctAnswer = progression[hiddenIndex];
  progression[hiddenIndex] = '..';
  const question = `${progression.join(' ')}`;
  return [String(correctAnswer), question];
};

const generateProgression = () => {
  const start = getRundomNumber(100);
  const length = getRundomNumber(5, 5);
  const step = getRundomNumber(20, 1);
  const hiddenIndex = getRundomNumber(length);
  return getProgression(start, length, step, hiddenIndex);
};

export default () => identificationWinOrLoose(rules, generateProgression);
