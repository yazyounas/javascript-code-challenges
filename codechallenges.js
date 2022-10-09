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
  
  //Write a function acceptEverything() that takes in an array of strings and loops through each element in the array and grudgingly accepts each of them, by logging to the console in the following format: 'Ok, I guess I will eat some [element].
  const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
      console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}

// Write your code here:
const declineEverything = arr => {
  arr.forEach(politelyDecline);
}
console.log(declineEverything(veggies));
const acceptEverything = veg => {
 veg.forEach(vege => {
   console.log(`Ok, I guess I will eat some ${vege}.`)
 });
}
console.log(acceptEverything(veggies));
// returns an array with the square of each of the elements of that array.
const numbers = [2, 7, 9, 171, 52, 33, 14]

const toSquare = num => num * num

// Write your code here:
const squareNums = arr => arr.map(toSquare);

console.log(squareNums(numbers));



//argument array but with capitalized letters and an exclamation point appended to the end:

// Write your code here:

/*const shoutGreetings = arr => {
  let greet = [];
  for (let i = 0; i < arr.length; i++) {
    greet.push(arr[i].toUpperCase() + '!');
  }
  return greet;
}
*/
const shoutGreetings = word => word.map(words =>words.toUpperCase() + '!')
  


/*const shoutGreetings = arr => arr.map(word => wordtoUpperCase() + '!');
*/

// Feel free to uncomment out the code below to test your function!

const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];

console.log(shoutGreetings(greetings))
// Should print [ 'HELLO!', 'HI!', 'HEYA!', 'OI!', 'HEY!', 'YO!' ]

//returns that array with the years sorted in descending order.
const sortYears = arr => arr.sort((year1, year2) => year2 - year1);






// Feel free to uncomment the below code to test your function:

const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922]

console.log(sortYears(years))
// Should print [ 2018, 2011, 1999, 1982, 1970, 1963, 1951, 1922 ]

//returns an array with the items that are present in both arrays.

const justCoolStuff = (firstArray, secondArray) => firstArray.filter(item => secondArray.includes(item))

/*
// As a function declaration AND using named function w/ a loop:
function justCoolStuff(firstArray, secondArray) {
      function isInSecondArray(item){
            for(let i = 0; i<secondArray.length; i++){
                  if (secondArray[i] === item){
                        return true
                  }
            }
            return false 
      }
      return firstArray.filter(isInSecondArray)
}
*/

const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];

const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway']; 

console.log(justCoolStuff(myStuff, coolStuff))