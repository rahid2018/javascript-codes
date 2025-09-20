// ===========VARIABLES========

// Declare three variables: username, age, and isMember. Assign appropriate values and print them.
let username = "Rahid"
let age = 23
let isMember = true

// What happens if you declare a variable with var, let, and const? Show with an example.
// Try to redeclare a variable using var, let, and const. What is the difference?

let name = "Rahid"
// let name = "Malik"//error as already declared
// console.log(name);

// const pi = 3.14
// const pi = 3.1459//error as already declared
// console.log(pi);

var city = "pune"
// var city = "Mumbai"// no error 
// console.log(city)//Mumbai


// =========DATA TYPES==========

// Create variables for each type: string, number, boolean, null, undefined, object, and print their typeof.
let naav = "Malik"
console.log(typeof naav)
const pi = 3.14
console.log(typeof pi)
const isLoggedIn = false
console.log(typeof isLoggedIn)
let age1 = null
console.log(typeof age1)
let abc = undefined
console.log(typeof abc)
let obj = {
    name : "Rahid",
    age : 23
}
console.log(typeof obj)

// Why does typeof null return "object" in JavaScript?
console.log(typeof null)// it is null because it is javascript error, or special case

// Create an array of 5 numbers and print its type using typeof. What do you observe?
let arr = ["Rahid","Aqib","Muneeb","Sahil","Musaib"]
console.log(typeof arr)// type is object, arrays are special objects
console.log(typeof Array)
console.log(typeof Function)

// ======Type Conversion========

// Convert the string "123" into a number and print its type.
let sn = "123"
let n = Number(sn)
console.log(typeof n)

// Convert the number 456 into a string and print its type.

let n1 = 456
let sn1 = String(n1)
console.log(typeof sn1)

// Convert the string "Rahid" into a number. What is the result and its type?

let name1 = "Rahid"
let NoName1 = Number(name1)
console.log(typeof NoName1)

// What is the result of Number(true), Number(false), Number(""), and Number(" ")?
console.log(Number(true))
console.log(Number(false))
console.log(Number(""))
console.log(Number(" "))

// Convert 0, 1, "", "hello", null, and undefined into Boolean values.
let zero = 0
let zeroB = Boolean(zero)
let one = 1
let oneB = Boolean(one)
let quote = ""
let quoteB = Boolean(quote)
let greet = "hello"
let greetB = Boolean(greet)
let nul = null
let nulB = Boolean(nul)
let und = undefined
let undB = Boolean(und)

// ========Comparison==========

// Compare 2 == "2" and 2 === "2". Explain the difference.
console.log(2 == "2")// true as only values gets checked
console.log(2 === "2")// false both value and data types gets checked and their datatypes are different

// Compare null == undefined and null === undefined. What is the output?
console.log(null==undefined)//true, because losoe equaity treats them equal
console.log(null===undefined)//false

// What is the result of "5" > 3 and why?
console.log("5" > 3)// true as js converts strings to number automatically

// What is the result of "apple" > "banana" in JavaScript?
console.log("apple">"banana")//false

// Compare true == 1, true === 1, false == 0, and false === 0.
console.log(true == 1) //true
console.log(true === 1)//false
console.log(false == 0)//true
console.log(false === 0)//false