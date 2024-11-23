// Write a function called countBs that takes a string as its only argument 
// and returns a number that indicates how many uppercase B characters there are in the string.

function countBs(string) {
    if (typeof string !== 'string') {
        throw new TypeError('The input must be a string.');
    }
    
    let countB = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === 'B') {
            countB++;
        }
    }
    return countB;
}

// Using Javascript methods
function countBsMethods(string) {
  if (typeof string !== 'string') {
    throw new TypeError('The input must be a string.');
  }

  return string.split('').filter((char) => char === 'B').length;
}

// Using for..of loop

function countBsFoorLoop(string) {
  if (typeof string !== 'string') {
    throw new TypeError('The input must be a string.');
  }

  let count = 0;
  for (const char of string) {
    if (char === 'B') {
      count++;
    }
  }
  return count;
}


// Next, write a function called countChar that behaves like countBs,
// except it takes a second argument that indicates the character
// that is to be counted(rather than counting only uppercase B characters).

function countChar(string, input) {
    
  if (typeof string !== 'string' || typeof input !== 'string') {
    throw new TypeError('Both arguments must be strings.');
  }

  if (input.length !== 1) {
    throw new Error('The second argument must be a single character.');
  }
    
    let countChar = 0; 
    for (const char of string) {
        if (char === input) {
            countChar++;
        }
    }

    return countChar;
}

// Rewrite countBs to make use of this new function.

function countBsUseCountChar(string) {
    return countChar(string, 'B');
}

// Testing the functions
console.log(countBs('Bean Counting is Beautiful!')); // Output: 2
console.log(countChar('Beautiful Birds and Bubbles!', 'B')); // Output: 3
console.log(countChar('Hello, world!', 'o')); // Output: 2
console.log(countChar('Bananas are great!', 'a')); // Output: 4
