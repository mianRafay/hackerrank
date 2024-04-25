

// Initial Solution

    /** Thought Process
     *  - the requirement is to find if the string anagaram can be a palindrome
     *  - for that we need to check if the count of each element should be pair
     *  - only one chracter can be in odd count
     * 
     *  - first we get the chars of each element of array
     *  - then get the character values count
     *  - check if the count is greater than 1 
     * 
     * Note: it was not working for really large value
     */
function gameOfThrones(s) {
    // Write your code here
    const countPerChar = {};
    for (const char of s) {
        if (!countPerChar[char]) countPerChar[char] = 1;
        else countPerChar[char] += 1;
    }
    const charsCount = Object.values(countPerChar)
    const oddCount = charsCount.filter(item => item % 2 != 0).length;
    
    if (oddCount > 1) return 'NO';
    else return 'YES';

}