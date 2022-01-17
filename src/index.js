import acquaintance from './games/cli.js'; // импорт приветсвия
import error from './games/error.js';// импорт вывода при ошибке пользователя

const games = (rules, game) => {
  const name = acquaintance();// приветствие и запрос имени пользователя
  // объявление правил игры
  console.log(rules);
  // запуск игры до трех побед
  const winsCount = 3;// максимальное количество побед
  for (let i = 0; i < winsCount; i += 1) { // пока счетчик меньше 3 выполняется цикл
    const [corAnswer, answer] = game();
    if (corAnswer !== answer) { // сравнение значений
      error(answer, corAnswer, name);// в случае ошибки вызов модуля error
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);// после трех верных ответов
};

export default games;
