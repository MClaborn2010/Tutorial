// let id: number = 5;
let company: string = "Claborn Digital";
let isPublished: boolean = true;
// 'any' can change types. Note how the string is changed to a boolean.
let x: any = "Hello";
x = true;
let age: number;
age = 30;

let ids: number[] = [1, 2, 3, 4, 5];
// The code below works. ids.push('Hello') will not work as it is a different type.
ids.push(2);

let arr: any[] = [1, true, "hello"];

//Tuple
let person: [number, string, boolean] = [1, "Michael", true];
//Tuple Array
let employee: [number, string][];

employee = [
  [1, "Mike"],
  [2, "Jill"],
  [3, "John"],
  [4, "David"],
];

//Union
let id: string | number = 22;

id = 22;

//Enum
enum Direction1 {
  Up,
  Down,
  Left,
  Right,
}

enum Direction2 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

console.log(Direction2.Down);

const user: {
  id: number;
  name: string;
} = {
  id: 1,
  name: "John",
};
