function findMedian(arr) {
    // Write your code here

    /**
     * Initial Solution
     * - get half of the length 
     * - sort by using JS native method and get the value of middle one
     */
    const half =Math.floor(arr.length/2);
    return arr.sort((a,b)=> a-b)[half]

}