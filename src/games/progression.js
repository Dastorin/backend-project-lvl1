const generationProgression = (startNum, count, step) => {
  const result = [];
  let num = startNum;
  let i = 0;
  do {
    result.push(num);
    num += step;
    i += 1;
  } while (i < count);
  return result;
};

const progression = () => {
  const startNum = Math.floor(Math.random() * 100);
  const countElements = Math.floor(Math.random() * 5) + 5;
  const stepProgression = Math.floor(Math.random() * 20) + 1;
  const shadowElement = Math.floor(Math.random() * countElements);
  const arithmeticProgres = generationProgression(startNum, countElements, stepProgression);
  const corAnswer = arithmeticProgres[shadowElement];
  arithmeticProgres[shadowElement] = '..';
  const question = `Question: ${arithmeticProgres.join(' ')}`;
  return [String(corAnswer), question];
};
export default progression;
