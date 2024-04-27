
// Initial Solution

    /** Thought Process
     *  - remove all the spaces fro string
     *  - need to calculate col length - to check how many character needs to be jumped
     *  - loop through for the col length 
     *  - add inner loop which pick value from main array and jumpe col characters
     *  - then in the end append a spacee
     */

// function encryption(s) {

//     // first remove the spaces 
//     const text = s.replaceAll(' ', '')
    
//     //calculate row and col
//     let col = Math.ceil(Math.sqrt(text.length))
   
//     // transform array
//     let str = "";
//     for (let i = 0; i < col; i++) {
//         for (let k = 0; k < text.length; k++) {
//             if (text[k + i]===undefined) break
//             str = str + text[k + i]
//             k = k + col-1
//         }
//         str = str + " "
//     }
//     return str.trim();
// }


// Better Solution 

/**
 * 
 * Thougth Process:
 *  - The complexity will be same
 *  - The only thing adjusted is the number of lines and good looping
 */
function encryption(s) {
const text = s.replaceAll(' ', '')
    
    //calculate row and col
    let col = Math.ceil(Math.sqrt(text.length))
   
    // transform array
    let str = "";
    
    for( let i=0; i< col; i++){
        for(let k=i; k<text.length; k=k+col){
            str+=text[k]
        }
        str+=' '
    }
}