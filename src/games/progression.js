import getRundomNumber from './random.js';
import identificationWinOrLoose from '../index.js';

const rules = 'What number is missing in the progression?';

const getProgression = (startNumber, count, step) => {
  const result = [];
  for (let index = 0; index < count; index += 1) {
    result.push(startNumber + (step * index));
  }
  return result;
};

const generateProgression = () => {
  const startNumber = getRundomNumber(100);
  const countElements = getRundomNumber(5, 5);
  const stepProgression = getRundomNumber(20, 1);
  const shadowElement = getRundomNumber(countElements);
  const arithmeticProgression = getProgression(startNumber, countElements, stepProgression);
  const correctAnswer = arithmeticProgression[shadowElement];
  arithmeticProgression[shadowElement] = '..';
  const question = `${arithmeticProgression.join(' ')}`;
  return [String(correctAnswer), question];
};

export default () => identificationWinOrLoose(rules, generateProgression);
