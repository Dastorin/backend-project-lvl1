import readlineSync from 'readline-sync';
import acquaintance from './cli.js';
import error from './games/error.js';

const games = (rules, game) => {
  const name = acquaintance();
  console.log(rules);
  const winsCount = 3;
  for (let i = 0; i < winsCount; i += 1) {
    const [corAnswer, question] = game();
    console.log(question);
    const answer = readlineSync.question('Your answer: ');
    if (corAnswer !== answer) {
      error(answer, corAnswer, name);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export default games;
