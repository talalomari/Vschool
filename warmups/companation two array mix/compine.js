var newArray = [];
var firstArray = ["a", "b", "c", "d", "r"];
var secondArray = [1, 2, 3, 4, 5, 8];
var count = 0;
if (firstArray.length > secondArray.length) {
    count = firstArray.length
} else {
    count = secondArray.length
}

for (var i = 0; i < count; i++) {
    if (firstArray[i]) {
        newArray.push(firstArray[i]);
    }
    if (secondArray[i]) {

        newArray.push(secondArray[i]);
    }
}
console.log(newArray);