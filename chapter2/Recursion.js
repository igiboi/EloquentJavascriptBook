//  We’ve seen that we can use % (the remainder operator) to test whether a number is even or odd by using % 2 to see whether it’s divisible by two.
// Here’s another way to define whether a positive whole number is even or odd:

// Zero is even.

// One is odd.

// For any other number N, its evenness is the same as N - 2.

// Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive, whole number) 
// and return a Boolean.


function isEven(n) {
  if (n === 0) return true; // Base case: Zero is even
  if (n === 1) return false; // Base case: One is odd
  if (n < 0) return isEven(-n); // Handle negative numbers by converting to positive
  return isEven(n - 2); // Recursive step
}

// Testing the function
console.log(isEven(50)); // true
console.log(isEven(75)); // false
console.log(isEven(-1)); // false
