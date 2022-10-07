const myName = 'Aleksandr';
const programmingLanguage = 'JavaScript';
const courseCreatorName = 'Minin';
const reasonText = 'Progress';
const numberOfMounth = '12'

let myInfoText = `Привет всем! Меня зовут ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}.
Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал ${programmingLanguage} ${numberOfMounth} месяцев. Я уверен, что пройду данный курс до конца!`;

myInfoText = myInfoText.replaceAll(programmingLanguage, programmingLanguage.toUpperCase())

console.log(myInfoText);
console.log(myInfoText.length);
console.log(myInfoText[0]);
console.log(myInfoText[myInfoText.length-1]);