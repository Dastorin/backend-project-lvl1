const getRundomNumber = (ending, start = 0) => {
  const result = Math.floor(Math.random() * ending + start);
  return result;
};
export default getRundomNumber;
