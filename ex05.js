// Some Exercise
// Instructions: Create an array of at least five numbers. Write code to check if some of the numbers are even.

const numbers = [1, 6, 8, 2, 9];

const isThereEven = numbers.some((num) => num % 2 === 0);

console.log(isThereEven);
