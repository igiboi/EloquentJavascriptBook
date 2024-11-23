// Write a range function that takes two arguments, start and end and returns
//an array containing all the numbers from start up to and including end.

function range(start, end) {

    let rangeOfNumbers = []
    for (var i = start; i <= end; i++) {
        rangeOfNumbers.push(i);
    }

    return rangeOfNumbers;
}

console.log(range(1, 10));

// Next, write a sum function that takes an array of numbers and returns the sum of these numbers.
// Run the example program and see whether it does indeed return 55.

function sum(num) {
    // get the array from range function 
    let totalSumOfArray = 0;
    for (let i = 0; i < num.length; i++) {
        totalSumOfArray += num[i]; 
    }

    return totalSumOfArray;
}

console.log(sum(range(1, 10)));