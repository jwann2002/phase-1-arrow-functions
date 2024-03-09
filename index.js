// In index.js
// Define the divide function
const divide = function(a, b) {
    if (b === 0) {
      throw new Error("Division by zero is not allowed.");
    }
    return a / b;
  };
  
  // Define and assign values to a and b
  let a = 2000;
  let b = 100;
  
  // Call divide function and store the result
  const result = divide(a, b);
  
  // Log the result of the division
  console.log("Result of division:", result);
  
  // Define the square function
  const square = (num) => {
    return num * num;
  };
  
  // Example usage:
  console.log(square(2)); // Output: 4
  
  // Define the add function
  const add = (num1, num2) => {
    return num1 + num2;
  };
  
  // Example usage:
  console.log(add(3, 4)); // Output: 7
  
  // Export all functions
  module.exports = { divide, square, add };
  