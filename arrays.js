const arr = [1,2,3,4,5,6]
// console.log(arr)
// console.log(arr[2])

// another way to create arrays
const newArray = new Array(1,23,4,5,6)
// console.log(newArray);

//+++++++++++++++ARRAY METHODS++++++++++++++++++++++

// push, pop, shift, unshift,
arr.push(10)
arr.pop()
arr.unshift(20)
arr.shift()
// console.log(arr)
const anotherArray = arr.join()// copy array as string
// console.log(typeof anotherArray)
// console.log(anotherArray)
// console.log(arr.includes(1))
// console.log(arr.indexOf(1))


//join, concat, spread, flat, from, of
const marver_heros = ["Thor","Ironman","Spiderman"]
const dc_heros = ["me","Batman","Kuch be"]

// console.log(marver_heros.join(dc_heros))// joins as string
// console.log(marver_heros.concat(dc_heros))
// ===OR===
const merged = [...marver_heros, ...dc_heros]
// console.log(merged)

const rand = [1,2,3,[2,3,[4,[5,4]]]]
const singlearr = rand.flat(Infinity)
// console.log(singlearr);

// console.log(Array.from("Rahid"))
// special case
// console.log(Array.from({name:"Rahid"}))// it will return empty array as we need to mention that either make an array from keys or values
let a = 1
let b = 100
let c = 200

console.log(Array.of(a, b, c))
