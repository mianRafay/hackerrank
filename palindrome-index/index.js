function palindromeIndex(s) {

    // Initial Solution

    /** Thought Process
     *  - make array of string 
     *  - loop through whole array and remove one element every time
     *  - compare if array is equal to it's reverse then return index
     * 
     * Note: it was not working for really large value
     */


    // Final Solution

    /** Thought Process
     *  - Using Two Pointer approach
     *  - make array of string 
     *  - loop through the half of length
     *  - compare and check if first and last is not equal
     *  - if not equal then remove from both end  
     *  - compare with reverse , if equal then it means to return the start_pointer vaue
     *  - else retrun the end_pointer value
     * 
     *
     */


    s = s.split('');
    for (let i = 0; i < s.length / 2; i++) {
        if (s[i] !== s[s.length - i - 1]) {
            let arr = s.slice(i + 1, s.length - i);
            return arr.join('') === arr.reverse().join('') ? i : s.length - i - 1;
        }
    }
    return -1

}
