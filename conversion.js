/**
 *
 * inch to feet convert
 * 12 inch = 1 feet
 *
 */

function inchToFeet(inch) {
  const feet = inch / 12;
  return feet;
}

// 75 inch
function inchToFeet2(inch) {
  const feetFraction = inch / 12;
  const feetNumber = parseInt(feetFraction);
  const inchRemaining = inch % 12;
  const result = feetNumber + "ft" + inchRemaining + "inch";
  return result;
}

const shuvoHight = inchToFeet2(75);
console.log(shuvoHight);

function mileToKm(mile) {
  const kilo = mile * 1.60934;
  return kilo;
}

function kmToM(km) {
  const miles = km * 0.621371;
  return miles;
}
