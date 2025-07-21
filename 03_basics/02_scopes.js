let a = 300;

if (true) {
    let a = 200;
    console.log(a); // 200 (because block scoped)
}



console.log(a); // 300 (original outer scoped a)
// console.log(b); // ReferenceError
// console.log(c); // ReferenceError
