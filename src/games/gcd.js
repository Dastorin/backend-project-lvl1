import readlineSync from 'readline-sync';

const gcd = () => {
  const num1 = Math.floor(Math.random() * 20) + 1;// рандомное определение первого числа
  const num2 = Math.floor(Math.random() * 20) + 1;// рандомное определение второго числа
  console.log(`Question: ${num1} ${num2}`);
  let result = 0;
  for (let index = 1; index <= Math.min(num1, num2); index += 1) {
    if (num1 % index === 0 && num2 % index === 0) {
      result = index;
    }
  }
  const answer = readlineSync.question('Your answer: '); // запрос ответа от пользователя;
  return [result, Number(answer)];
};
export default gcd;
