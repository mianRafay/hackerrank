function pangrams(s) {

    // Initial Solution

    /** Thought Process
     *  - make an array of alphabats 
     *  - compare the given string after converting it to lower case 
     *  - if any of the element is missing return not pangram
     */

    // const string= s.toLowerCase()
    // const alphabat =('abcdefghijklmnopqrstuvwxyz').split('')
    // //first check if length is less than aplhabat
    
    // if(string.length<alphabat.length) return 'not pangram'
    
    // for(let i =0; i< alphabat.length; i++){
    //     if(string.indexOf(alphabat[i])<0){
    //         return 'not pangram'
    //     }
    // }
    // return 'pangram'
    


    
    // Final Solution
    
    /** Thought Process 
     *  - there are 27 alphbats in English 
     *  - make Set of given character string ( set only contains unique value)
     *  - if the length is greater than 26 it will return pangram
     * 
     *  Note: it will not work if string contains integer value
     *  
     */

    return (new Set(s.toLowerCase()).size > 26)? 'pangram' :'not pangram'
}
