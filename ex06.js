// Every Exercise
// Instructions: Create an array of at least five numbers. Write code to check if every number in the array is positive.

const numbers = [1, 6, -8, 2, 9];

const arrNums = numbers.every((num) => num > 0);
if (arrNums) {
  console.log("Allow entry!");
} else {
  console.log("Deny entry!");
}
