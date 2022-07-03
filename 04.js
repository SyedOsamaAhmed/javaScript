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
console.log(obj3);
