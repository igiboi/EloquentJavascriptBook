// range function(start, end )
// returns [] from start up to the including the end
// function range(1, 10)
// need an array to hold the numbers
// for loop(variable, condition, modification)
//to include the value you need to make it less than (i <= end)
//return [1, 2, 3,... 10];
// Function to create an array of numbers from start to end

function range(start, end, step) {
  var result = [];

  // Check if step is undefined and set it to 1 if so
  if (step === undefined) {
    step = 1;
  }

  // Return an empty array for invalid step sizes
  if (step === 0) {
    return []; // If step is 0, return an empty array
  }

  // Adjust loop for positive and negative steps
  if (step > 0) {
    for (var i = start; i <= end; i += step) {
      result[result.length] = i; // Add current number to the end of the array
    }
  } else {
    for (var i = start; i >= end; i += step) {
      result[result.length] = i; // Add current number to the end of the array
    }
  }

  return result; // Return the resulting array
}

// Example usage
console.log(range(1, 10));      // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(1, 10, 2));   // Output: [1, 3, 5, 7, 9]
console.log(range(1, 10, -1));  // Output: [] (invalid step)
console.log(range(19, 2, -2));


// Function to calculate the sum of an array of numbers
function sum(arr) {
  let sum = 0; // Initialize sum variable
  for (const value of arr) {
    sum += value; // Correctly add the value to the sum variable
  }
  return sum; // Return the calculated sum
}

// Calculate and log the sum of numbers in the range from 1 to 10
console.log(sum(range(1, 10))); // Output: 55
