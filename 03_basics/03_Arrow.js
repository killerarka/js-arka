const user ={
    username: "arka",
    price : 100,

    welcomeMessage : function(){
        console.log(`Welcome ${this.username} to our website!`);
    }   
}

user.welcomeMessage();
user.username = "debika";
user.welcomeMessage();