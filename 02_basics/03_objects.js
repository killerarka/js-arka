// singletion 



// object literals


const MySym = Symbol("Key1");

const JsUser ={ 
    name: "Arka",
    "full name" : "Arka Biswas",
    [MySym]: "Key1",
    age : 25,
    location : "New York",
    email: "arka@gmail.com",
    isLoggedIn : false,
    lastLoginDays :["Monday", "Saturday"]

}
 
//console.log(JsUser.email);
//console.log(JsUser["email"]);
//console.log(JsUser["full name"]);
//console.log(JsUser[MySym]);

JsUser.email="arka@chatgtp.com";
//Object.freeze(JsUser);
JsUser.email="arka@abc.com";
//console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello");
}
JsUser.greetingTwo = function(){
    console.log('Hello, ${this.name}'); 
}


console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());