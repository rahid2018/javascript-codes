let score = "33abc"
console.log(typeof score)

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber)


// ===== Easily Conversion=====
// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedin = "hitesh"

let BooleanIsLoggedin = Boolean(isLoggedin)
// console.log(BooleanIsLoggedin)

// 1 => true, 0 => false
// "" => false, "kjd" => true

let someNumber = 33
let stringNumber = String(someNumber)
// console.log(typeof stringNumber)


// ===== operations =========

let value = 3
let negValue = -value
// console.log(negValue)//-3

let str1 = "hello"
let str2 = " Rahid"
let str3 = str1 + str2
// console.log(str3);

// console.log("1"+3); //13
// console.log(1+"3"); //13
// console.log("1"+3+2); //132 if string first then all treated as string
// console.log(1+3+"2"); //42 if string last then first conversion happens

// console.log(true)// true

let num1, num2, num3
num1 = num2 = num3 = 2 + 2 // not good way for readability

let gameCounter = 100
++gameCounter// prefix increment, value gets incremented at begining of usage
gameCounter++ // value gets incremented after usage
console.log(gameCounter)


