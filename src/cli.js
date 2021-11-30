/* eslint-disable no-console */
import readlineSync from 'readline-sync';

const acquaintance = () => {
  const name = readlineSync.question('May I have your name? ');
  return console.log(`Hello, ${name}!`);
};
export default acquaintance;
