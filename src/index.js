#!/usr/bin/env node
import acquaintance from './games/cli.js'; // импорт приветсвия
import evenAndOdd from './games/even-and-odd.js';// импорт впроса игры чет нечет
import calc from './games/calc.js';// импорт вопроса игры калькулятор
import gcd from './games/gcd.js';// импорт игры НОД
import progression from './games/progression.js';// импорт игры ариф. прогрессия
import prime from './games/prime.js';// импорт игры Простое ли число?
import error from './games/error.js';// импорт вывода при ошибке пользователя

const games = (game) => {
  const name = acquaintance();// приветствие и запрос имени пользователя
  // объявление правил игры
  switch (game) {
    case 'evenAndOdd':
      console.log('Answer "yes" if the number is even, otherwise answer "no".');
      break;
    case 'calc':
      console.log('What is the result of the expression?');
      break;
    case 'gcd':
      console.log('Find the greatest common divisor of given numbers.');
      break;
    case 'progression':
      console.log('What number is missing in the progression?');
      break;
    case 'prime':
      console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
      break;
    default:
      console.log('Game not defined');
  }
  let count = 0; // объявлнеие счетчика
  while (count < 3) { // пока счетчик меньше 3 выполнят цикл
    let item = 0;// объявление переменной итем
    // проверка какая игра вызвается
    switch (game) {
      case 'evenAndOdd':
        item = evenAndOdd();// присвоение переменной модуля игры чет нечет
        break;
      case 'calc':
        item = calc();// присвоение переменной модуля игры калькулятор
        break;
      case 'gcd':
        item = gcd();// присвоение переменной модуля игры НОД
        break;
      case 'progression':
        item = progression();// присвоение переменной модуля игры Ариф.прогрессия
        break;
      case 'prime':
        item = prime();// присвоение переменной модуля игры Простое ли число?
        break;
      default:
        console.log('Game not defined');
    }
    const corAnswer = item[0];// извлечение из массива значения правильного ответа
    const answer = item[1];// извлечение из массива значения ответа пользователя
    if (corAnswer === answer) { // сравнение значений
      count += 1;
      console.log('Correct!');
    } else {
      return error(answer, corAnswer, name);// в случае ошибки вызов модуля error
    }
  }
  return console.log(`Congratulations, ${name}!`);// после трех верных ответов
};
export default games;
