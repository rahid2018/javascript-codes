//singleton object
const myObj1 = new Object()

//object literal

const myObj = {
    name : "Rahid",
    age : 23,
    RollNo : 87,
    email : "rahidmalik033@gmail.com",
    id : {
        username : "Rahidmalik",
        password : "jndsnd",
        phno : 2987492387,
        otherDetails : {
            lastname : "malik",
            address : "Achabal"
        }
    }
}

// ways to access
// console.log(`My name is ${myObj.name} age is ${myObj.age} roll no is ${myObj.RollNo} and email is ${myObj.email}`)
// console.log(myObj["name"])

// console.log(myObj.id)
// console.log(myObj.id.phno)
// console.log(myObj.id.otherDetails)
// console.log(myObj.id.otherDetails.address)
// console.log(Object.keys(myObj))
// console.log(Object.values(myObj))
// console.log(Object.entries(myObj))

//adding elements
myObj["class"] = 203
myObj.class2 = 204
// console.log(Object.entries(myObj))

//OBject Constructor

function Person (fname, lname, ag, addr){
    this.firstname = fname
    this.lastname = lname
    this.age = ag
    this.address = addr
}

const father = new Person("Mohammad","Akbar",45,"Achabal")
// console.log(`My father is ${father.firstname} ${father.lastname} his age is ${father.age} and address is ${father.address}`)

//Destructuring... helps to reduce lot of code, and is used to unpack values of arrays,objects to separate variables
 const student = {
    sname : "Malik",
    sage : 24,
    semail : "rahidmalik@gmail.com"
 }

 let {sname, sage, semail} = student
 console.log(sname, sage, semail)

//  console.log("sname" in student)
console.log(Object.hasOwn(student, "sname"))