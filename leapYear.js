/**
 *
 * Simple Logic
 * year will be leap year if the year is divided by 4
 *
 *  */

function isLeapYear(year) {
  if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}

const LeapYear = isLeapYear(2043);
// console.log(LeapYear);

/***
 *
 * 1. those year that is not divisible by 100 and if the year is divisible by 4 then it will be a leap year
 * 2. if the year is divisible by 400, then it is a leap year
 *
 */

function isLeapYear2(year) {
  if (year % 100 !== 0 && year % 4 === 0) {
    return true;
  } else if (year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

const LeapYear2 = isLeapYear2(2100);
console.log(LeapYear2);
