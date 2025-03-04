const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Get a random number between 1 and 10
console.log(getRandomNumber(1, 10));
