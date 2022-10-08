//return newArry with the elemen in reverse order using for loop

const reverseArray = arr => {
    let newArr = [];
    for (let i = arr.length -1; i >= 0; i--) {
      newArr.push(arr[i]);
    }
    return newArr;
}
/*
// Alternate solutions:

// Using the .unshift() method
const reverseArray = arr => {
    let reversed = [];
    for (let i = 0; i < arr.length; i++) {
        reversed.unshift(arr[i]);
    }
    return reversed
}

// As a function declaration:
function reverseArray(arr) {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed
}
*/

const sentence = ['sense.','make', 'all', 'will', 'This'];

console.log(reverseArray(sentence));