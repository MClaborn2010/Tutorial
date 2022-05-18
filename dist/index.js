"use strict";
// let id: number = 5;
let company = "Claborn Digital";
let isPublished = true;
// 'any' can change types. Note how the string is changed to a boolean.
let x = "Hello";
x = true;
let age;
age = 30;
let ids = [1, 2, 3, 4, 5];
// The code below works. ids.push('Hello') will not work as it is a different type.
ids.push(2);
let arr = [1, true, "hello"];
//Tuple
let person = [1, "Michael", true];
//Tuple Array
let employee;
employee = [
  [1, "Mike"],
  [2, "Jill"],
  [3, "John"],
  [4, "David"],
];
//Union
let id = 22;
id = 22;
//Enum
var Direction1;
(function (Direction1) {
  Direction1[(Direction1["Up"] = 0)] = "Up";
  Direction1[(Direction1["Down"] = 1)] = "Down";
  Direction1[(Direction1["Left"] = 2)] = "Left";
  Direction1[(Direction1["Right"] = 3)] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
  Direction2["Up"] = "Up";
  Direction2["Down"] = "Down";
  Direction2["Left"] = "Left";
  Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Down);
const user = {
  id: 1,
  name: "John",
};
