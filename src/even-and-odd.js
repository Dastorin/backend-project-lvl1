import readlineSync from 'readline-sync';

const error = () => {
  console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
  console.log("Let's try again, name!");
};

const evenAndOdd = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  let count = 0;
  while (count < 3) {
    const randomNum = Math.floor(Math.random() * 100);
    console.log(`Question: ${randomNum}`);
    const answer = readlineSync.question('Your answer: ');
    if ((randomNum % 2 === 0 && answer === 'yes') || (randomNum % 2 !== 0 && answer === 'no')) {
      count += 1;
      console.log('Correct!');
    } else {
      return error();
    }
  }
  return console.log('Congratulations, name!');
};
export default evenAndOdd;
