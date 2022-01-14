// функция в случае неверного ответа
const error = (answer, corAnswer, name) => {
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${corAnswer}'.`);
  console.log(`Let's try again, ${name}!`);
};
export default error;
