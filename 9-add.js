// Define the add function
function add(a, b) {
  return a + b;
}

// Get the arguments and convert to numbers
const num1 = parseInt(process.argv[2]);
const num2 = parseInt(process.argv[3]);

// Calculate and print the sum
console.log(add(num1, num2));
