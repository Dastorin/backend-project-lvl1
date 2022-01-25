const getRundomNumber = (end, begin = 0) => {
  const result = Math.floor(Math.random() * end + begin);
  return result;
};
export default getRundomNumber;
