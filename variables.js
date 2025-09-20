const accountId = 12345 // can't change ever
let accountEmail = "rahid@gmail.com" // recommended because of scope it knows the scope 
var accountPassword = "9874932847" //  not recommended, because of scope change in one reflect change in all, didn't knows scope
accountCity = "Pune" // possible, but not recommended
let accountState; // browser sets its value as undefined which is true because it is not defined yet

console.log(accountId);// printing one value
console.log(accountPassword);// printing another


// to print all in one go without using separate print commands
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

