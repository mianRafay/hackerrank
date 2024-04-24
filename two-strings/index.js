// Initial Solution

    /** Thought Process
     *  - split one of the string and make array
     *  - compare each element for S2 string  
     *  - if found then return true else in the end return false
     */

function twoStrings(s1, s2) {
    // Write your code here
    s1=s1.split('')
    for(let i=0; i< s1.length;i++){
        if(s2.includes(s1[i])){
            return 'YES'
        }
    }
    return 'NO'

}