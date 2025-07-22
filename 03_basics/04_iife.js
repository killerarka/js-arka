// IIFE - Immediately Invoked Function Expression


(function chai(){
    console.log(`DB CONNECT`);
})();


(()=>{
    console.log(`DB CONNECT`);
}) ();

((name) => {
    console.log(`Hello ${name}`);
})("arka");