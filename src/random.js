const getRundomNumber = (begin, end) => {
  const result = Math.floor(Math.random() * (end + 1 - begin) + begin);
  return result;
};

export default getRundomNumber;
