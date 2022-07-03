//Computed Properties:

const key1 = "objkey1",
  key2 = "objkey2";
const value1 = "myvalue1",
  value2 = "myvalue2";

const obj = {
  [key1]: value1,
  [key2]: value2,
};

obj[key1] = value1;
obj[key2] = value2;

//console.log(obj);

//Spread operator in objects:

const obj1 = {
  key1: "value1",
  key2: "value2",
};
const obj2 = {
  key2: "value2",
  key3: "value3",
};

const obj3 = { ...obj1, ...obj2 };

//destructuring in object:
const artistInfo = {
  name: "Salena Gomez",
  age: 38,
  native: "American",
  occupation: "Singing",
};

const { name, age, ...restProps } = artistInfo;

//Nested destructuring:
const users = [
  { userId: 1, name_: "Osama", gender_: "male" },
  { userId: 2, name_: "Waqar", gender_: "male" },
  { userId: 3, name_: "Maham", gender_: "female" },
];

const [{name_:name1,userId}, , {name_,gender_}] = users;

