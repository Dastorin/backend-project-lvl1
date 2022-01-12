import readlineSync from 'readline-sync';

const error = (answer, corAnswer, name) => {
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${corAnswer}'.`);
  console.log(`Let's try again, ${name}!`);
};

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
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? '); // Запрос имени пользователя
  console.log(`Hello, ${name}`); // Приветствие
  console.log('Wath is the result of the expression?');
  let count = 0; // счетчик верных ответов
  while (count < 3) { // цикл до трех правильных ответов
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
    // проверка ответа на правильность
    if (resultCalc === Number(answer)) {
      count += 1; // увеличение счетчика правильных ответов на 1
      console.log('Correct!'); // вывод на экран что ответ правльный
    } else {
      return error(answer, resultCalc, name); // в случае неверного ответа вызов функции error
    }
  }
  // окончание функции после трех верных ответов
  return console.log(`Congratulations, ${name}!`);
};
export default calc;
