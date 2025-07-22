const user ={
    username: "arka",
    price : 100,

    welcomeMessage : function(){
        console.log(`Welcome ${this.username} to our website!`);
        console.log(this);
        
    }   
}

//user.welcomeMessage();
//user.username = "debika";
//user.welcomeMessage();
/*console.log(this);


function chai (){
    console.log(this);
}
chai();*/

 //const chai = function(){
//    let username = "arka";
   /// console.log(this.username);
//}

//chai();

 const chai = () => {
    let username = "arka";
    console.log(this.username);
}

//chai();

//const addTwo = (number1, number2) => {
  //  return number1 + number2;
    
//}

//const addTwo = (number1, number2) => number1 + number2;
const addTwo = (number1, number2) => ({username: "arka", price : 100});
console.log(addTwo(200, 400));

//const Array = [200 , 400 , 500 , 600];
//Array.array.forEach(element => {
    
//});