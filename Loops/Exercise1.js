// Get the sum of two arrays…actually the sum of all their elements.
// P.S. Each array includes only integer numbers. Output is a number too.

function sumOfBothArrays(arr_1, arr_2,) {
    
    let arr1Total = 0;
    let arr2Total = 0;

    for (var i = 0; i < arr_1.length; i++) {
         arr1Total += arr_1[i];
    }

    for (var j = 0; j < arr_2.length; j++) {
         arr2Total += arr_2[j];
    }

    const totalSumOfBothArray = arr1Total + arr2Total;

    return totalSumOfBothArray;
}

let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; // --> 276
let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26]; // --> 351
// Example output:
// 276 + 351 = 627
console.log(sumOfBothArrays(arr_1, arr_2));