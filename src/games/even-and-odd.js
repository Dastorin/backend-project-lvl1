import readlineSync from 'readline-sync';

const evenAndOdd = () => { // функция чет/нечет
  // определение рандомного целого положительного числа от 0 до 100.
  const randomNum = Math.floor(Math.random() * 100);
  console.log(`Question: ${randomNum}`); // вывод на экран вороса с рандомным числом.
  const answer = readlineSync.question('Your answer: '); // запрос ответа от пользователя;
  // поределение правильного овета
  if (randomNum % 2 === 0) {
    return ['yes', answer]; // функция возвращает значение yes и ответ пользователя
  }
  return ['no', answer];// функция возвращает знаечение no и ответ пользователя
};

export default evenAndOdd;
