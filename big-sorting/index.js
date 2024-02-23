function bigSorting(unsorted) {
     // Initial Solution

    /** Thought Process
     *  - use simple javascript sort 
     * 
     * 
     * Note: it was not working for really large value
     */

    //  return unsorted.sort((a,b)=> a-b)
    


    
    // Second Solution
    
    /** Thought Process 
     *  - use javascript array sort method
     *  - instead of using simple sort in the call back method implement logic
     *  - if the lengths are not equal then sort it on the no of character length
     *  - else loop through and compare it 
     * 
     */
 
    //  return unsorted.sort((a,b)=> {
    //      if (a.length != b.length) {
    //          return a.length - b.length;
    //      } else {
    //          for (let i = 0; i < a.length; i++) {
    //              if (a[i] < b[i]) {
    //                  return -1;
    //              } else if (a[i] > b[i]) {
    //                  return 1;
    //              }
    //          }
    //          return 0;
    //      }
    //  })

    // Final Solution
    
    /** Thought Process 
     *  - use javascript array sort method
     *  - same logic as above
     *  - removed un necessary conditions
     * 
     */
 
    return unsorted.sort((a, b) => {
        const lengthDifference = a.length - b.length;
        if (lengthDifference !== 0) return lengthDifference;
        
        for (let i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) return a[i] < b[i] ? -1 : 1;
        }
        return 0

    })


 
 }