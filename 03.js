const fruits = ["apple", "mango"];
fruits.push("strawberry");

//for in loop:

/* for(let index in fruits)
    //console.log(fruits[index]); */

//Array destructuring:

const myarr = ["value1", "value2", "value3", "value4"];
let [val1, val2, ...newarray] = myarr;

/* console.log(val1);
console.log(val2);
console.log(newarray); */

/* Objects"
-Reference type
-key-value pairs
-used to store real world data
 */

const person = {
  name: "Osama",
  age: 24,
  "person hobbies": ["hunting", "studying"],
};

person.gender = "male";
person["personality"]="INFJ";

//Difference between dot and bracket notation:

//console.log(person["person hobbies"]);// can access space contaoning properties
const key="email";

person[key]="abc@gmail.com"
delete person["person hobbies"]

//iteration on objects:

//for in loop:

/* for(let key in person)
console.log(`${key}: ${person[key]}`); */

//Object.keys:

for(let key of Object.keys(person))
console.log(person[key])