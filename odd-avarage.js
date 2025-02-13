/**
 * function takes an array as parameter
 * give me the average of the odd numbers in the array
 */

function oddNumberAverage(numbers) {
  const oddNumber = [];
  let sum = 0;
  for (const number of numbers) {
    if (number % 2 === 1) {
      oddNumber.push(number);
    }
  }
  for (let i = 0; i < oddNumber.length; i++) {
    sum += oddNumber[i];
  }
  const avg = sum / oddNumber.length;

  return avg;
}

const numbers = [23, 33, 84, 93, 37, 33, 80, 65, 78];
const average = oddNumberAverage(numbers);
console.log("average of the odd number is", average);
