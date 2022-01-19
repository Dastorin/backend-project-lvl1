const isEven = (number) => ((number % 2 === 0) ? 'yes' : 'no');

const definitionEvenOrOdd = () => {
  const randomNum = Math.floor(Math.random() * 100);
  const question = `Question: ${randomNum}`;
  const corAnswer = isEven(randomNum);
  return [corAnswer, question];
};

export default definitionEvenOrOdd;
