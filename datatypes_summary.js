//===== premitive====
// 7 types
// call by value and changes occur in copies not in actual values
// String, Number, Boolean, null, undefined, Symbol(uniqueness),BigInt(scientific values)

const name = "Rahid"
const no1 = 100;
const no2 = 10.3
let isBoolean = false
const outSideTemp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')
// note: both the values of ids remains not same
// ex
console.log(id===anotherId)// false
// const BigInt = 923523785237n

// ====== non premitive====/ reference types
// reference allocated directly in memory
// Array, Objects, Function

const heros = ["shaktimaan","naagraj","doga"]//array
// object 
let obj = {
    name:"hitesh",
    age:22
}

//function
// we can store function in variable
const myfunction = function(){}
{
    console.log("Hello world")
}

// all non premitive datatypes return type is object
