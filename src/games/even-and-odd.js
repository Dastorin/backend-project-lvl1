const evenAndOdd = () => { // функция чет/нечет
  // определение рандомного целого положительного числа от 0 до 100.
  const randomNum = Math.floor(Math.random() * 100);
  console.log(`Question: ${randomNum}`); // вывод на экран вороса с рандомным числом.
  // поределение правильного овета
  if (randomNum % 2 === 0) {
    return 'yes'; // функция возвращает значение yes и ответ пользователя
  }
  return 'no';// функция возвращает знаечение no и ответ пользователя
};

export default evenAndOdd;
