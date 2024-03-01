function countingSort(arr) {
    // Write your code here

    /**
    * Initial Solution
    * - declare array and fill with 0
    * - increase count at every index
    * - loop array and for index count loop through and push index value 
    */
    // let tempArr = Array(100).fill(0)

    // for (let i = 0; i < arr.length; i++) {
    //     tempArr[arr[i]]++
    // }
    // let returnArr =[]
    // for(let i=0; i<tempArr.length; i++){
    //     if(tempArr[i]>0){
    //         for(let j=0; j<tempArr[i];j++ ){
    //             returnArr.push(i)
    //         }
    //     }
    // }

    /**
     * Final Solution
     * 
     * Thought Process:
     * - declare array and fill with 0
    * - increase count at every index
    * - loop forEach and declare array fill array with index 
     */
    let tempArr = Array(100).fill(0)
    let returnArr = []

    arr.forEach(element => {
        tempArr[element]++
    });
    tempArr.forEach((e,i)=>returnArr.push(...Array(e).fill(i)))
    return returnArr
}