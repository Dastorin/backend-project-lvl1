import readlineSync from 'readline-sync';
import error from './games/error.js';

const winsCount = 3;

const games = (rules, game) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(rules);
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
