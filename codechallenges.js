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

// Write your code here:

//array of strings and uses a for loop to print a greeting with each string in the array.
const greetAliens = arr => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      console.log(`Oh powerful ${arr[i]}, we humans offer our unconditional surrender!`)
      newArr.push(arr[i]);
    }
    return newArr;
  }
  
  
  
  const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];
  greetAliens(aliens)

  //returns a new array with each string in the array prepended with 'baby '.
  // Write your code here:
const convertToBaby = arr => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
     newArr.push('baby ' + arr[i])
    }
    
    return newArr;
}
  
  const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];
  
  console.log(convertToBaby(animals)) 
  
  