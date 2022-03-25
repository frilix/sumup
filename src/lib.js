function sumArray(arr) {
   // console.log(arr.reduce((value, acc) => parseInt(value) + acc, 0))
    return arr.reduce((acc, value) => parseInt(value) + acc, 0);
}

function checksum(number) {    
    let digits = number.toString().split('')
    return sumArray(digits);
}

module.exports = {
    sumArray,
    checksum,
}