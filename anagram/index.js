/**
 * 
 * Thought Process:
 *  - basically we have to divide string into half and then check of the unique element 
 *  - first check if the length is odd , then return -1
 *  - if length is even , then divide by 2 and split it into two substring
 *  - then loop through the string length /2 
 *  - check each element of the second substring 
 *  - if found then replace the first occurence with empty
 *  - else increase the counter
 *  - in the end return the count
 */

function anagram(s) {
    // Write your code here
    let count = s.length
    if (count %2 !==0) {
        return -1
    }

    let strL = s.slice(0, count / 2)
    let strR = s.slice((count / 2))
    let counter = 0
    for (let i = 0; i < count / 2; i++) {
        strL.includes(strR[i]) ? strL = strL.replace(strR[i],"") : counter++
    }
    return counter
}