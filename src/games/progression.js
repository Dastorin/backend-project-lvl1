import getRundomNumber from '../random.js';
import identificationWinOrLoose from '../index.js';

const rules = 'What number is missing in the progression?';

const getProgression = (start, count, step, hiddenIndex) => {
  const question = [];
  for (let index = 0; index < count; index += 1) {
    question.push(start + (step * index));
  }
  const correctAnswer = question[hiddenIndex];
  question[hiddenIndex] = '..';
  return [String(correctAnswer), question];
};

const generateProgression = () => {
  const start = getRundomNumber(0, 100);
  const length = getRundomNumber(5, 10);
  const step = getRundomNumber(1, 20);
  const hiddenIndex = getRundomNumber(0, length - 1);
  return getProgression(start, length, step, hiddenIndex);
};

export default () => identificationWinOrLoose(rules, generateProgression);
