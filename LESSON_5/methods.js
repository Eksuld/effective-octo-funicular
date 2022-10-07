//toUpperCase, toLowerCase

const animal = 'Lion';
console.log('upper', animal.toLocaleUpperCase());
console.log('upper', animal.toLocaleLowerCase());

console.log('animal', animal);

// найти символы - indexOf, includes
const text = 'Мой любимый язык программирования JavaScript';
console.log('indexOf', text.indexOf('JavaScript'));
console.log('includes', text.includes('JavaScript'));

//Обрезка строки - slice, substring
/*
const programmingLanguage = 'JavaScript';
console.log('slice', programmingLanguage.slice(1, 5));
console.log('substring', programmingLanguage.substring(1, 5));
*/

// Замена симвлов в строке - replace, replaceAll

const programmingLanguage = 'JavaScript';
console.log('replace', programmingLanguage.replace('a', 'A'));
// console.log('replace', programmingLanguage.replaceAll('a', 'A'));

//repeat
const helloText = 'hello ';
console.log(helloText.repeat(3));

//trim
const nameOfUser = prompt('Как вас зовут?');
console.log('nameOfUser', nameOfUser.trim());