//Dates 

/*let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toTimeString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);*/


let myCreatedDate = new Date("2020-01-01");
//console.log(myCreatedDate.toDateString());

let myCreatedDate2 = new Date(2020,0,1, 5 ,3);

//console.log(myCreatedDate2.toLocaleString());


let myTimeStamp = Date.now
//console.log(myTimeStamp());
//console.log(myCreatedDate.getTime());
//console.log (Math.floor(Date.now() / 1000));


let newDate = new Date();
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());


//'${new Date().getDay()} and the  time is ${new Date().toLocaleTimeString()}'


newDate.toLocaleString('default', {
    weekday:   'long',
    timeZone:  'UTC',
});

console.log(newDate);


