import readlineSync from 'readline-sync';

const progression = () => {
  let num = Math.floor(Math.random() * 100);// определение значения первого элемента ряда
  const count = Math.floor(Math.random() * 5) + 5;// определение количество элеметнов ряда
  const step = Math.floor(Math.random() * 20) + 1;// определение шага прогрессии
  const shadow = Math.floor(Math.random() * count);// определение номера скрытого элемента
  const result = [];// объявлнеие массива для арифметической прогресси
  let i = 0;
  // определение стека арифмитечскеой прогресси
  do {
    result.push(num);
    num += step;
    i += 1;
  } while (i < count);
  const corAnswer = result[shadow];// сохранение значения правильного ответа
  result[shadow] = '..';// скрытие элемета который необходимо найти
  console.log(`Question: ${result.join(' ')}`);// вывод на экран вопроса
  const answer = readlineSync.question('Your answer: '); // запрос ответа от пользователя;
  return [corAnswer, Number(answer)];
};
export default progression;
