import readlineSync from 'readline-sync';

// функция рандомного задания выражения
const randomExpr = () => {
  const operand = ['+', '-', '*']; // список операторов
  const i = Math.floor(Math.random() * 3);// рандомное определение нормера в списке операторов
  const num1 = Math.floor(Math.random() * 3);// рандомное определение первого числа
  const num2 = Math.floor(Math.random() * 3);// рандомное определение второго числа
  const result = [num1, operand[i], num2];// массив из рандомных двух чисел и оперетора
  return result;
};

const calc = () => {
  // определение рандомного выражения
  const item = randomExpr();
  const num1 = item[0];
  const num2 = item[2];
  console.log(`Question: ${num1} ${item[1]} ${num2}`); // вывод на экран выражения.
  // подсчет результата рандомного выражения
  let resultCalc = 0; // ввод переменной резeльтата подсчета выражения
  if (item[1] === '+') {
    resultCalc = num1 + num2;
  } if (item[1] === '-') {
    resultCalc = num1 - num2;
  } if (item[1] === '*') {
    resultCalc = num1 * num2;
  }
  const answer = readlineSync.question('Your answer: '); // запрос ответа от пользователя
  return [resultCalc, Number(answer)];
};

export default calc;
