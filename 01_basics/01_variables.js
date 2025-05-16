 const accountId = 77777777777
 let accountEmail = "arkamakaut@gmail.com"
 var accountPassword = "12345"
 accountCity ="Kolkata"
 let accountState;
 //accountId = 2 // not allwoed 
 
 
 accountEmail = "arkabiswas005@gmail.com"
 accountPassword = "112211221122"
 accountCity ="Mumbai"
console.log(accountId);

/* Prefer not to use var
because of issue in block scope and functional scope
*/

 console.table([accountId,accountEmail,accountPassword, accountCity, accountState])