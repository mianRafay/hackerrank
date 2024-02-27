function funnyString(s) {

    // Initial Solution

    /** Thought Process
     *  - make an array of string
     *  - make reverse of string array
     *  - loop through and compare differecences of first indexes of original array and last indexes of reverse array
     */

    // const string= s.toLowerCase()

    // let strArr = s.split('')
    // let reverse = strArr.reverse().join('')

    // for (let i = 0; i < strArr.length - 1; i++) {
    //     if (Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1)) !== Math.abs(reverse.charCodeAt(i) - reverse.charCodeAt(i + 1))) {

    //         return 'Not Funny'
    //     }
    // }
    // return 'Funny'


    //Final Solution

    /** Thought Process
         *   - Use two pointer approach 
         *  - loop through and compare differecences of first indexes of original array and last indexes of reverse array
         */

    const length = s.length
    for (let i = 0; i < s.length - 1; i++) {
        if (Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1)) !== Math.abs(s.charCodeAt(length - 1 - i) - s.charCodeAt((length - 2) - i))) {
            return 'Not Funny'
        }
    }
    return 'Funny'
}