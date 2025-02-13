/**
 * array has some duplicate elements
 *
 */

const number = [1, 3, 5, 6, 76, 5, 3, 2, 2, 2, 3, 4, 5, 6];

function noDuplicate(array) {
  const unique = [];
  for (const item of array) {
    if (unique.includes(item) === false) {
      unique.push(item);
    }
  }
  return unique;
}

const uniqueArr = noDuplicate(number);
console.log(uniqueArr);
