function camelcase(s) {
    // Write your code here

    /** Thought Process
    *  - get charcode of spcific index and check between range
    *  - if exist increment the count
    *  - in the end return count with +1
    */

    let count = 0
    for (let i = 0; i < s.length; i++) {
        if (s.charCodeAt(i) > 64 && s.charCodeAt(i) < 91) {
            count++
        }
    }
    return ++count

    //Alternate Solution using Regex
    /** Thought Process
        *  - use regex expression and split on the basis 
        *  - and retrun length
        */

    return s.split(/(?=[A-Z])/).length

}