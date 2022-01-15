import readlineSync from 'readline-sync';

const prime = () => {
  const num = Math.floor(Math.random() * 100) + 1;// рандомное определение числа
  console.log(`Question: ${num}`);// вывод на экран вопроса
  const answer = readlineSync.question('Your answer: '); // запрос ответа от пользователя;
  // определение натуральности числа
  let i = 1;
  let result = 0;
  while (i < num / 2) {
    if (num % i === 0) {
      result = i;
    }
    i += 1;
  }
  if (result === 1) {
    return ['yes', answer];
  }
  return ['no', answer];
};
export default prime;
