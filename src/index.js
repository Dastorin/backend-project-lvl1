#!/usr/bin/env node
import readlineSync from 'readline-sync';
import acquaintance from './games/cli.js'; // импорт приветсвия
import evenAndOdd from './games/even-and-odd.js';// импорт впроса игры чет нечет
import calc from './games/calc.js';// импорт вопроса игры калькулятор
import error from './games/error.js';// импорт вывода при ошибке пользователя

const games = (game) => {
  const name = acquaintance();// приветствие и запрос имени пользователя
  // объявление правил игры
  if (game === 'evenAndOdd') {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
  } if (game === 'calc') {
    console.log('What is the result of the expression?');
  }
  let count = 0; // объявлнеие переменно счетчика
  while (count < 3) { // пока счетчик меньше 3 выполнят цикл
    let item = 0;// объявление переменной итем, которой
    // проверка какая игра вызвается
    if (game === 'evenAndOdd') {
      item = evenAndOdd();// присвоение переменной модуля игры чет нечет
    } if (game === 'calc') {
      item = calc();// присвоение переменной модуля игры калькулятор
    }
    const answer = readlineSync.question('Your answer: '); // запрос ответа от пользователя;
    if (item === answer) {
      count += 1;
      console.log('Correct!');
    } else {
      return error(answer, item, name);
    }
  }
  return console.log(`Congratulations, ${name}`);
};
export default games;
