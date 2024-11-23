function reverseArrayWithTemp(arr) {
  const reversed = []; // Create an empty array to hold reversed elements

  // Loop through the original array in reverse order
  for (let i = arr.length - 1; i >= 0; i--) {
    // Access each element of the original array starting from the last index (i.e., arr.length - 1)
    // i starts at 4 (for [1, 2, 3, 4, 5]) and decrements until it reaches 0

    reversed.push(arr[i]); // Use push to add each element to the end of the reversed array
    // Here, arr[i] accesses the current element:
    // - When i = 4, arr[4] is 5; this is pushed to reversed
    // - When i = 3, arr[3] is 4; this is pushed next
    // - This continues until i = 0, where arr[0] is 1, which is also pushed to reversed
  }

  return reversed; // Return the new reversed array containing elements in reverse order
}

// Example usage:
const originalArray = [1, 2, 3, 4, 5]; // Define the original array
const newArray = reverseArrayWithTemp(originalArray); // Call the function to reverse the array
console.log(newArray); // Output: [5, 4, 3, 2, 1] (the reversed array)
console.log(originalArray); // Output: [1, 2, 3, 4, 5] (original array remains unchange
