/**
 * 
 * Thought Process
 * 
 * - Sort the array 
 * - set the initial value
 * - loop item and check difference in absolute way
 * - if difference is less than minimun value then replace value and empty array
 * - else push the values 
 * 
 */


function closestNumbers(arr) {
    // Write your code here
    arr.sort((a, b) => a - b)
    let minimum = Math.abs(arr[1] - arr[0])
    let result = []
    for (let i = 1; i < arr.length; i++) {
        const diff = Math.abs(arr[i] - arr[i-1])
        if (diff === minimum) {
            result.push(arr[i - 1], arr[i])
        } else if (diff < minimum) {
            minimum=diff
            result = []
            result.push(arr[i-1], arr[i])
        }

    }
    return result
}