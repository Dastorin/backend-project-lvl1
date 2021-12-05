import readlineSync from 'readline-sync';

const error = (name) => { // функция в случае неверного ответа.
  console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
  console.log(`Let's try again, ${name}!`); // вместо name необходимо подставить имя пользователя из модуля cli.js
};

const evenAndOdd = () => { // функция чет/нечет
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? '); // Запрос имени пользователя
  console.log(`Hello, ${name}`); // Приветствие
  console.log('Answer "yes" if the number is even, otherwise answer "no"'); // правила игры
  let count = 0; // счетчик верных ответов
  while (count < 3) { // цикл до трех правильных ответов
    // определение рандомного целого положительного числа от 0 до 100.
    const randomNum = Math.floor(Math.random() * 100);
    console.log(`Question: ${randomNum}`); // вывод на экран вороса с рандомным числом.
    const answer = readlineSync.question('Your answer: '); // запрос ответа от пользователя
    // если число четное и ответ yes или если число нечетное и ответ no
    if ((randomNum % 2 === 0 && answer === 'yes') || (randomNum % 2 !== 0 && answer === 'no')) {
      count += 1; // увеличение счетчика правильных ответов на 1
      console.log('Correct!'); // вывод на экран что ответ правльный
    } else {
      return error(name); // в случае неверного ответа вызов функции error
    }
  }
  // окончание функции после трех верных ответов вместо name
  // необходимо подставить имя пользователя из cli.js
  return console.log(`Congratulations, ${name}!`);
};
export default evenAndOdd;
