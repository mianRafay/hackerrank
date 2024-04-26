function missingNumbers(arr, brr) {
    // Write your code here
    const indexOfAll = (arr, val) => arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), []);
    const unique = [...new Set(brr)]
    const resultArr = []
    for (const val of unique) {
        const lengthA = indexOfAll(brr, val).length
        const lengthB = indexOfAll(arr, val).length
        if (lengthA>lengthB) resultArr.push(val)
    }
    return resultArr.sort((a,b)=> a-b)
}