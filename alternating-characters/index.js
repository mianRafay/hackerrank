function alternatingCharacters(s) {
    // Write your code here
    // let count=0;
    // for(let i=0; i< s.length; i++){
    //   const value=s.indexOf(s[i], i+1)
    //  // console.log(value,'value')
    //     if(value==i+1){
    //       count++  
    //     }
    // }
    // return count
    let count=0
    for(let i=0; i< s.length; i++){
        if(s[i]===s[i+1]){
            count++
        }
    }
    return count
    // console.log(count,"count")

}
