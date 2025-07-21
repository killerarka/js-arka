let a = 300;

if (true) {
    let a = 200;
 //   console.log(a); // 200 (because block scoped)
}



//console.log(a); // 300 (original outer scoped a)
// console.log(b); // ReferenceError
// console.log(c); // ReferenceError


function one () {
    const username = "arka";

    function two() {
        const website = "youtube";
        console.log(username);
    }

   // console.log(website);


    two ();

}
//one ();

if (true) {
    const username = "arka";
    if(username === "arka"){
        const website = " youtube";
       // console.log(username + website);
    }
}


// ***************** interesting part ***************

function addone(num){
    return num + 1;
}
addone(5);
console.log(addone(5));


const addTwo = function (num){
    return num + 2;
}
addTwo(5);

console.log(addone(5));
console.log(addTwo(5));
