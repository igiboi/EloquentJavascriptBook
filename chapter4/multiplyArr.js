//Create a function to multiply all the numbers in a given array and return the product.

function multiplyArr(arr) {
    let total = 1;

    for (var i = 0; i < arr.length; i++) {
        total *= arr[i];
    }
    return total;
}

arr = [2, 4, 6]
console.log(multiplyArr(arr));