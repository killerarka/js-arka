const marvel_heroes = ["thor", "Ironman", "spiderman" ];
const dc_heroes= ["superman", "flash", "batman"];

//marvel_heroes.push(dc_heroes);  
//console.log(marvel_heroes);
//console.log(marvel_heroes[3][1]);

 //const all_heroes = marvel_heroes.concat(dc_heroes);

//console.log(all_heroes);

const all_heroes = [...marvel_heroes, ...dc_heroes];

//console.log(all_heroes);

const another_array = [1 ,2,3,[4,5,6], 7 , [8,9 ,[10 , 11]]];

const another_array2 = another_array.flat(Infinity);

//console.log(another_array2);


console.log(Array.isArray("Arka"));
console.log(Array.from("Arka"));
console.log(Array.from({name: "Arka"})); //  intersting 

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
