const name = "Rahid"
const repoCount = 5
// console.log(name + repoCount + "value")// this is not recommended as it is old

// we can use backtics (string intercollation) for printing string as it helps to put placeholders with help of dollar signa and curly braces
// ex 

// console.log(`My name is ${name} and my repo count is ${repoCount}`);

// we can declare string like:
//When you use new String(), it wraps the primitive string in an object so it behaves like an object with methods.
 const myName = new String("Rahid")
 console.log(myName);
console.log(myName[0])
console.log(myName.__proto__)//return an empty object
console.log(myName.toUpperCase())
console.log(myName.charAt(2))//h, returns the element at 2nd position
console.log(myName.indexOf('i'))//3, returns the index of element
console.log(myName.substring(0,4)); // from 0 to n-1
const anotherString = myName.slice(-3, 4)
console.log(anotherString);

const trimString = "    Rahid Malik   "
console.log(trimString.trim());

console.log(trimString.replace('R','Z'))
console.log(trimString.includes('r'));
console.log(trimString.split(' '))