//+++++++++++++++++numbers+++++++++++++++++++++++++++++

const score = 199
// console.log(score)// js treats it as number automatically

// now if we want that is mut be only number / Strict
const balance = new Number(100)
// console.log(balance)// it returns a number

// console.log(balance.toString().length)// we can change number to string and find length also

const myNumber = 123.8966
// console.log(myNumber.toPrecision(4))

const hunderds = 1000000
// console.log(hunderds.toLocaleString('en-IN'))


//+++++++++++++++++Maths+++++++++++++++++++++++++++++

// console.log(Math)
// console.log(Math.abs(-4))// returns absolute (positive number) for only negatives, positive return positive
// console.log(Math.round(4.3))// rounds the number to nearest
// console.log(Math.ceil(4.3))// rounds the number to its higher
// console.log(Math.floor(4,3))// rounds the number to its lower
// console.log(Math.min(4,701,23,78))
// console.log(Math.max(4,701,23,78))

// console.log(Math.random())// values comes always in between of 0 and 1

// console.log(Math.random()*10)// goes from 0 to 10
// console.log((Math.random()*10)+1) // +1 includes both ends
// console.log(Math.floor(Math.random()*10)+1)// return floor value and +1 adds both ends like 10 and 1


// now range numbers from min to max
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1) + min))
// works: (max - min + 1) is 11 (the number of possible integers).
//Math.random() produced 0.5, so 0.5 * 11 = 5.5.
//Math.floor(5.5) becomes 5, then add min (10) → 15.
