const definitionEvenOrOdd = () => {
  const randomNum = Math.floor(Math.random() * 100);
  const question = `Question: ${randomNum}`;
  const corAnswer = (randomNum % 2 === 0) ? 'yes' : 'no';
  return [corAnswer, question];
};

export default definitionEvenOrOdd;
