const isPrime = (num) => {
  let divisor = 1;
  let result = 0;
  while (divisor <= num / 2) {
    if (num % divisor === 0) {
      result = divisor;
    }
    divisor += 1;
  }
  return (result === 1) ? 'yes' : 'no';
};

const prime = () => {
  const num = Math.floor(Math.random() * 100) + 1;
  const question = `Question: ${num}`;
  const corAnswer = isPrime(num);
  return [corAnswer, question];
};
export default prime;
