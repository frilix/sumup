function sumArray(arr) {

       return arr instanceof Array 
            ? arr.reduce((acc, value) => parseInt(value) + acc, 0)
            : 0;
}

function checksum(number) {    
    let digits = number.toString().split('')
    return sumArray(digits);
}

module.exports = {
    sumArray,
    checksum,
}