const definitionPrime = () => {
  const num = Math.floor(Math.random() * 100) + 1;
  const question = `Question: ${num}`;
  let divisor = 1;
  let result = 0;
  while (divisor <= num / 2) {
    if (num % divisor === 0) {
      result = divisor;
    }
    divisor += 1;
  }
  const corAnswer = (result === 1) ? 'yes' : 'no';
  return [corAnswer, question];
};
export default definitionPrime;
