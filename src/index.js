function add(numbers) {
  if (!numbers) return 0;

  const delimiter = /,|\n/;
  const numArray = numbers.split(delimiter).map(Number);

  return numArray.reduce((sum, num) => sum + num, 0);
}

module.exports = add;
