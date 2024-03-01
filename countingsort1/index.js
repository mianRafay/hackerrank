function countingSort(arr) {
    // Write your code here

    /**
     * Initial Solution
     * - declare array and fill with 0
     * - increase count at every index
     */
    let tempArr= Array(100).fill(0) 
    
    for(let i=0; i<arr.length; i++){
            tempArr[arr[i]]++
    }
    return tempArr

}