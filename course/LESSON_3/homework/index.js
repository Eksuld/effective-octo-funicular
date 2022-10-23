// let num = 50;
// console.log(typeof num);
// let str = 'vasya';
// console.log(typeof str);
// let choose = false;
// console.log(typeof choose);

// num = '50';
// console.log(typeof num);
// str = 70;
// console.log(typeof str);
// choose = null
// console.log(typeof choose);
// __________________________________________

// let ageOfPerson1 = 18;
// let ageOfPerson2 = '20';

// let nameOfAnimal1 = null;
// let nameOfAnimal2 = 'Charlie';

// const bestProgrammingLanguage1 = 'JavaScript';
// const bestProgrammingLanguage2 = 'Java';

// let initialValue1;
// let initialValue2 = 0;

// var isJavaScriptProgrammer1 = true;
// var isJavaScriptProgrammer2 = false;

// let helloText1 = 'Hello!';
// let helloText2 = 'Привет!';

let ageOfPerson1 = 18;
let ageOfPerson2 = '20';
ageOfPerson2 = ageOfPerson1;
console.log(ageOfPerson2, typeof ageOfPerson2);


let nameOfAnimal1 = null;
let nameOfAnimal2 = 'Charlie';
nameOfAnimal2 = nameOfAnimal1;
console.log(nameOfAnimal2, typeof nameOfAnimal2);

const bestProgrammingLanguage1 = 'JavaScript';
const bestProgrammingLanguage2 = 'Java';
console.log('Переменную с const переопределить нельзя');
console.log(bestProgrammingLanguage1, typeof bestProgrammingLanguage1,bestProgrammingLanguage2, typeof bestProgrammingLanguage2);

let initialValue1;
let initialValue2 = 0;
initialValue2 = initialValue1;
console.log(initialValue2, typeof initialValue2);

let isJavaScriptProgrammer1 = true;
let isJavaScriptProgrammer2 = false;
console.log('var является устаревшим');
isJavaScriptProgrammer2 = isJavaScriptProgrammer1;
console.log(isJavaScriptProgrammer2, typeof isJavaScriptProgrammer2);

let helloText1 = 'Hello!';
let helloText2 = 'Привет!';
helloText2 = helloText1;
console.log(helloText2, typeof helloText2);
