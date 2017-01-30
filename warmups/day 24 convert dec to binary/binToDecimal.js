function convertBinary(number) {
    var binaryArr = [];
    for (; number; number >>= 1) {
        binaryArr.push(number & 1);
    }
    return binaryArr.reverse().join('');
}

console.log(convertBinary(30));