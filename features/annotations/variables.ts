let apples: number;
apples = 5;

let speed: string = 'fast';
let hasName: boolean = true;
let nothingMuch: null = null;

let nothing: undefined = undefined;

// built in objects

let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, false, true];

// classes
class Car {}

let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

point.x = 2;

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use annotations
// 1) Function that returns the 'any' type
const json = '{"x":10, "y":20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

// 2) When we declare a variable on one line and initalizate it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;
foundWord = false;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// 3) Variable whose type cannot be inferred correctly
// It's a bad code but just for example
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for(let i = 0; i < numbers.length;i++){
  if(numbers[i]> 0){
    numberAboveZero = numbers[i]
  }
}

