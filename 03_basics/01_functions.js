

function SayMyName() {
    console.log("A");
    console.log("R");
    console.log("K");
    console.log("A");

}

//SayMyName();

//function addTwoNumbers(number1, number2) {
 //   console.log(number1 + number2);
//}

function addTwoNumbers(number1, number2) {
    //let result = number1 + number2;
    //return result;
return number1 + number2;

}

//addTwoNumbers(2 ,3);

const result = addTwoNumbers(2, 3);

//console.log("Result: " , result);


function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username");
        
    return '${username} logged in!'
}
}
//console.log(loginUserMessage());


//*******************************************


function calculateCartPrice(...num1) {
    return num1

}

  //console.log(calculateCartPrice(200 , 400 , 500));

const user ={
    username: "arka",
    price : 100,
}
function handledObjesct (anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
//handledObjesct(user);
 
handledObjesct({
    username: "debika",
    price : 120,
})

const myNewArray = [200 , 400 , 500 , 600];
function resultSecondValue(getarray){
    return getarray[1];
}

//console.log(resultSecondValue(myNewArray));
console.log(resultSecondValue([200 , 400 , 500 , 600]));
