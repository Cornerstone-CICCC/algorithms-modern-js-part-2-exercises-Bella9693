// Sort Exercise
// Instructions: Create an array of at least five numbers in random order. Write the code to sort this array in ascending order.

const numbers = [5, 3, 6, 8, 12];

function sortAscending(a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
}

console.log(numbers.sort(sortAscending));
