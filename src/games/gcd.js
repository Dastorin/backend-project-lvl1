const isGcd = (num1, num2) => {
  let result = 0;
  for (let index = 1; index <= Math.min(num1, num2); index += 1) {
    if (num1 % index === 0 && num2 % index === 0) {
      result = index;
    }
  }
  return result;
};

const gcd = () => {
  const num1 = Math.floor(Math.random() * 20) + 1;
  const num2 = Math.floor(Math.random() * 20) + 1;
  const question = `Question: ${num1} ${num2}`;
  const corAnswer = isGcd(num1, num2);
  return [String(corAnswer), question];
};
export default gcd;
