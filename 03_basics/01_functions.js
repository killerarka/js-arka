

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

console.log(loginUserMessage());
