
function stones(n, a, b) {

    // Initial Solution 

    // let resArr=new Set()
    // for(let i =0; i< n; i++){
    //     resArr.add((a*(n-i-1))+(b*i))
    // }
    // return [...resArr].sort((a,b)=>a-b)


    // Final solution 

    let resArr = new Set()
    const start = a <= b ? a : b
    const end = a <= b ? b : a
    for (let i = 0; i < n; i++) {
        resArr.add((start * (n - i - 1)) + (end * i))
    }
    return [...resArr]
}