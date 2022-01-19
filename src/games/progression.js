const progression = () => {
  let num = Math.floor(Math.random() * 100);
  const countElements = Math.floor(Math.random() * 5) + 5;
  const stepProgression = Math.floor(Math.random() * 20) + 1;
  const shadowElement = Math.floor(Math.random() * countElements);
  const result = [];
  let i = 0;
  do {
    result.push(num);
    num += stepProgression;
    i += 1;
  } while (i < countElements);
  const corAnswer = result[shadowElement];
  result[shadowElement] = '..';
  const question = `Question: ${result.join(' ')}`;
  return [String(corAnswer), question];
};
export default progression;
