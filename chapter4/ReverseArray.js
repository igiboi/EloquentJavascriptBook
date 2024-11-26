const array = [132, 22, 13, 43, 512];

function reverseArray(array) {
    const reversed = [];

    for (let i = array.length - 1; i >= 0; i--) {
        reversed.push(array[i]);
    }

    return reversed;
}
console.log(reverseArray(array));


// This function creates a new array with the elements in reverse order.
// It does not modify the original array, making it a pure function.

// [132, 22, 13, 43, 512];
// i = array.length - 1 -> i = 4 (the last index of the array)
// array[4] = element 512 of array  -> reversed.push(512)