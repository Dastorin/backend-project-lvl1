import getRundomNumber from './random.js';
import games from '../index.js';

const generationProgression = (startNumber, count, step) => {
  const result = [];
  let numberProgression = startNumber;
  for (let index = 0; index < count; index += 1) {
    result.push(numberProgression);
    numberProgression += step;
  }
  return result;
};

const rules = 'What number is missing in the progression?';

const progression = () => {
  const startNumber = getRundomNumber(100);
  const countElements = getRundomNumber(5, 5);
  const stepProgression = getRundomNumber(20, 1);
  const shadowElement = getRundomNumber(countElements);
  const arithmeticProgres = generationProgression(startNumber, countElements, stepProgression);
  const correctAnswer = arithmeticProgres[shadowElement];
  arithmeticProgres[shadowElement] = '..';
  const question = `${arithmeticProgres.join(' ')}`;
  return [String(correctAnswer), question];
};

export default () => games(rules, progression);
