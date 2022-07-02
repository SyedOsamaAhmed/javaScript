// comparison operator:

let num1 = 8,
  num2 = 8;
// console.log(num1>num2);
// console.log(num1>=num2);
// console.log(num1<=num2);

// == vs === same is the case with != vs !==
// == only concerned with value ot data type while ===  is concerned with both value and data type

num1 = "7";
num2 = 7;
// console.log(num1 === num2);

/*Falsy values in javascript are:
1- ""
2- null
3- undefined
4- 0 
Truthy values in javascript are:
1- "abc"
2- 1,-1*/

// ternary/conditional operator
let age = 15;
let drink = age > 5 ? "coffee" : "milk";
// console.log(drink);

// Nested if else:

let winningNum = 19,
  userGuess;
/* userGuess = +prompt("Enter a number:");

if (userGuess === winningNum) console.log("Your guess is right!!!");
else {
  if (userGuess < winningNum) console.log("YOUR GUESS IS TOO LOW!!!!");
  else console.log("YOUR GUESS IS TOO HIGH!!!!");
} */

//Arrays:

//cloning:
let arr1=["item1","item2"],arr2=arr1.slice(0),arr3=[].concat(arr2);

//spread operator
let arr4=[...arr2];

arr1.push("item3");
let arr=arr1.slice(0).concat(["item4"])
console.log(arr);
