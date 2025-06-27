// Primitive 

// 7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const IsLoggdIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 35856746984n



// Reference ( Non Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "nagraj", "doga"]
let myObj = {
    name : "Arka"
    
}

const myFunction = function(){
    console.log("Hello World");
}

//console.log(typeof anotherId);





//***********************************************  next video starts here

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "arkabiswas.com"

let anothername = myYoutubename
anothername="killerarka"

console.log(anothername);
console.log(myYoutubename);

let userOne ={
    email:"arkamakaut@gmail.com"
    
}

let userTwo = userOne

userTwo.email="debika@gmail.com"

console.log(userOne);
console.log(userTwo);


