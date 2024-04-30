
/**
 * Initial Solution:
 * 
 * Thought Process:
 * 
 * - we have to check the occurence of 010 string 
 * - for each iteration , check the two consecutive index values
 * - if match then increment the counter and i value by 2 ++ (because we do not have to check next two then)
 * 
 */

function beautifulBinaryString(b) {
    // Write your code here
    let count=0;
    for(let i=0; i< b.length-2; i++){
        if(b[i]=='0' && b[i+1]=='1' && b[i+2]=='0'){
            count++ ;
            i+=2
        }
    }
    return count
}


/**
 * Final Solution:
 * 
 * Thought Process:
 * 
 * - simply split array on '010' and send the length of array
 * - e.g 101001011010
 * - the split will work in [1010, 010, 11010]
 */
return b.split("010").length - 1