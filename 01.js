//Variables: for stoeing and using data for later:
"use strict";
var firstName = "Osama";

//console.log(firstName);

// console.log(firstName);
/*Rules for naming variables:
1- variable name cannot start with number.
2- only _ or $ is allowed in naming variables.
2.1- only first_name(Snakecase) or _firstName are valid and same in $ case.
3- no spaces allowed in variable
4- variables should be camelcase i.e highAltitude */

var value = 10;
// console.log(value ** 2);  //power
// console.log(value * 2);
// console.log(value / 5);
// console.log(value ** 0.5);

//Strings:(immutable)
let name_ = "OSAMA";
// console.log(name_.trim());//trim() method remove spaces in string
// console.log(name_.toUpperCase());
// console.log(name_.toLocaleLowerCase());

// console.log(name_.slice(1,4));

let age = 23,
  first$name = "Isma";
// console.log(typeof age);
// console.log(typeof first$name);

//Number to strings:
// console.log(typeof (age + ""));
// console.log(typeof String(age))

//string to Number:
let str = +"34";
//console.log(typeof str);
// console.log(typeof Number(str));

//string concatenation:
let str1 = "Osama",
  str2 = "Ahmed";
// console.log(str1 + " " + str2);

//template string:
//console.log(`My name is ${firstName} and my age is ${age}`)

//MAX_SAFE_INTEGER: how long a number can be stored on variable:
let variable = 123;
// console.log(Number.MAX_SAFE_INTEGER);

//BigInt:
let no = BigInt(3);
// console.log(no);
let sameno = 12n;
// console.log(sameno);
