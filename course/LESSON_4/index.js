//JavaScript имеет динамическую типизацию

//1. к строке
const age = 20;
console.log('number age:', typeof age);
console.log('string age', typeof String(age)); //явное преобразование

const updatedAge = '1' + 20;
console.log('updatedAge', typeof updatedAge); //неявное преобразование

//2. к числу
const experienceInJavaScript = '5';
console.log('string experienceInJavaScript', typeof experienceInJavaScript);
console.log('number experienceInJavaScript',typeof Number( experienceInJavaScript)); //явное преобразование
console.log('experienceInJavaScript', +experienceInJavaScript); //неявное преобразование

console.log('Hello World', Number('Hello World')); // Nan

//3. к Boolean
console.log('hello', Boolean('hello'));
console.log('5', Boolean(5));

//null, undefined, Nan, 0, '' преобразуются к false

console.log('0', Boolean(0));