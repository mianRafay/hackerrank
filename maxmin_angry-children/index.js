// Initial Solution

/** Thought Process
 *  - have to make sub array of the given length
 *  - and need to compare max - min , and need to return the minimal difference value
 *
 *  - fist sort down the array, the substring should be consisit of consectutive element
 *  - declare minimum value for first subsring
 *  - check the difference and store the minumum difference
 *
 */
 
// function maxMin(k, arr) {
//   // Write your code here
//   arr.sort((a, b) => a - b);

//   let min = arr[k - 1] - arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     const diff = Math.abs(arr[k + i - 1] - arr[i]);
//     if (diff < min) {
//       min = diff;
//     }
//   }
//   return min;
// }
 
//Final Solution 

/**
 * Thought Process
 * - Same as above , but instead of if condition 
 * - Math.min method is used to compare
 */
function maxMin(k, arr) {
  // Write your code here
  arr.sort((a, b) => a - b);

  let min = arr[k - 1] - arr[0];

  for (let i = 0; i < arr.length - k + 1; i++) {
    min = Math.min(min, arr[k + i - 1] - arr[i]);
  }
}
