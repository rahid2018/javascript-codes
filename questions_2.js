// =============VARIABLES AND DATA TYPES===================

// 1.Declare a variable using let, assign it a string, and print its type.
 let myname = "Rahid"
//  console.log(typeof myname)

//  2. What will be the output of the following?

let a = null;
// console.log(typeof a);// object

// 3. Create a variable to store a person’s name, age, and isStudent (boolean). Print all values.
let name = "Rahid"
let age = 23
let isStudent = true
// console.log(`Name is ${name} age is ${age} and student status is ${isStudent}`)

// ================TYPE CONVERSION============================

// 1. Convert the string "123" to a number and add 10 to it.

let mystr = "123"
let convertedstr = Number(mystr)
// console.log(convertedstr+10)

// 2. Convert the number 45 into a string and print its type.

let n1 = 45
let converted = String(n1)
// console.log(typeof converted)

// 3. What will this print and why?

// console.log(Number("Hello"));// prints NaN because it cannot be converted to number

//===================COMPARISON OPERATORS================

// 1. What is the difference between == and === in JavaScript? Show with an example.

let no1 = 10
let no2 = 20

// console.log(no1 == no2)// false as it compares only values
// console.log(no1 === no2)// false as it compares both value and datatype


// 2. Predict the output:

// console.log(0 == false);// true false is converted to 0, type coercion
// console.log(0 === false);// false checks both type and value 0 (number) and false (Boolean)

//=================ARRAYS==================

// 1. Create an array of 5 numbers and print the first and last element.

const arr = [1,2,3,4,5]
// console.log(`First element ${arr[0]} and last element ${arr[4]}`)

// 2. Use push and pop on an array [1,2,3]. Show the result after each operation.
const array = [1,2,3]
array.push(10)// pushes element at end 
// console.log(array)
array.pop()// removes element from end
// console.log(array)

// 3. What is the difference between slice and splice? Give examples.

const newArray1 = [1,2,3,4,5,6,7,8,9]

let slicedArray = newArray1.slice(1,4)
// console.log(slicedArray)// extracts and return new array from existing array without changes as we can says return copy of indexes

const newArray2 = [1,2,3,4,5,6,7,8,9]

let spliceRemoved = newArray2.splice(1,3,)// removes elements from array by taking start and deletecount
let spliceAdded = newArray2.splice(1,0,22,33)// add new elemets to array by taking start deletecount and items
let spliceReplaced = newArray2.splice(1,3,40)// replaces elements from array  by taking start element index, new element

// main difference between slice and splice is that slice return copy of indexes from array without changing and splice changes the original array and returns by adding, deleting or replacing elements

// ================STRINGS===================

//1. Find the length of "JavaScript".
const js = "JavaScript"
// console.log(js.length)//10

// 2. Convert "hello world" into uppercase.

// console.log("hello world".toUpperCase())

// 3. Extract "world" from "hello world" using slice.

// console.log("hello world".slice(6,))

// 4. Replace "dog" with "cat" in "The dog is cute".

let animal = "The dog is cute"
// console.log(animal.replace('dog','cat'))
// or
// console.log("The dog is cute".replace('dog','cat'))

//====================NUMBERS==============

// 1. Convert the number 12.6789 to:

// Integer using Math.floor

// Integer using Math.round

const number1 = 12.6789
// console.log(Math.floor(number1))//12
// console.log(Math.round(number1))//13

// 2. What will this print?

// console.log(1 / 0);//Infinity division by 0 in JS is not error it results Infinity
// console.log(-1 / 0);//Infinity division by 0 in JS is not error it results -Infinity

//==================MATH============

// 1. Generate a random number between 1 and 10.

// console.log(Math.floor(Math.random()*10)+1)

// 2. Find the maximum and minimum of [3, 7, 2, 9].

let n = [3, 7, 2, 9]
console.log(Math.max(...n))//use spread operators to spread array items
console.log(Math.min(...n))

// 3. Calculate the square root of 144 using Math.sqrt.

console.log(Math.sqrt(144))//12



