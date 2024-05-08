function beautifulTriplets(d, arr) {
    // Write your code here
    let counter =0
    for(let i=0; i<arr.length; i++){
        if(arr.includes(arr[i]+d) && arr.includes(arr[i]+ d*2)){
            counter ++;
        }   
    }
   return counter
}