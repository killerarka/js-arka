const name = "arka biswas";
const repoCount = 25;

//console.log(name + repoCount + " value");


console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const GameName = new String('arkadebika-biswas');

console.log(GameName[0]);
console.log(GameName.__proto__);


console.log(GameName.length);
console.log(GameName.toUpperCase());
console.log(GameName.charAt(5));
console.log(GameName.indexOf('d'));


const mystring = GameName.substring(0,5);
console.log(mystring);

const anotherString = GameName.slice(0,5);
console.log(anotherString);

const newStringOne = "    arka    "

console.log(newStringOne);
console.log(newStringOne.trim());

const url ="https://arka.com/arka%20biswas"

console.log(url.replace("%20", '-'));


console.log(url.includes('arka'));

console.log(GameName.split('-'));