// Write a program that print all the numbers from 1 to 100,

function fizzBuzz(start, end) {
  // Ensure start is less than or equal to end
  if (start > end) {
    console.log('Start number must be less than or equal to end number.');
    return;
  }

  for (let i = start; i <= end; i++) {
    let output = '';

    // Check divisibility
    if ((i % 3 === 0) & (i % 5 === 0)) {
      output = i + ' fizzBuzz';
    } else if (i % 3 === 0) {
      output = i +' fizz';
    } else if (i % 5 === 0) {
      output = i + ' Buzz'; // Append 'Buzz' for multiples of 5
    } else {
      output = i; // If none of the above, set output to the current number
    }

    console.log(output); // Print the result
  }
}

fizzBuzz(1, 100);

// Always Check for Combinations First: When dealing with multiple conditions that can overlap (like in FizzBuzz),
// always check for the combination first.This ensures that you capture cases where both conditions apply.

// Sequential Evaluation: The JavaScript engine evaluates each if statement in order, stopping as soon as it finds a true condition:
// It will never execute the "FizzBuzz" check if it has already found a true condition for "Fizz" or "Buzz" first.
// Early Return: In a typical if-else structure, once a true condition is found, the rest of the conditions are ignored (not evaluated).