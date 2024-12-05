function add(numbers) {
  // return 0 if the input string is empty.
  if (!numbers) return 0;

  //   regular expression to split by commas(,) or new lines(/n).
  const delimiter = /,|\n/;
  //   split the string into an array using the delimiter and convert each element to a number.
  const numArray = numbers.split(delimiter).map((num) => Number(num));

  // check for negative numbers
  const negatives = numArray.filter((num) => num < 0);
  if (negatives.length > 0) {
    throw new Error(
      `negative numbers are not allowed: ${negatives.join(", ")}`
    );
  }
  //   reduce the array to calculate the sum of all numbers.
  return numArray.reduce((sum, num) => sum + num, 0);
}

module.exports = add;
