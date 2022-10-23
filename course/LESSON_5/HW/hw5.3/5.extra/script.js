let javaScriptDescription = `JavaScript — мультипарадигменный
язык программирования. Поддерживает объектно-ориентированный, императивный и
функциональный стили. Является реализацией спецификации ECMAScript. JavaScript
обычно используется как встраиваемый язык для программного доступа к объектам
приложений.`

let javaScriptDescriptionIndex = Math.floor(javaScriptDescription.length/2);
javaScriptDescription = javaScriptDescription
.slice(1, javaScriptDescriptionIndex)
.replaceAll('а', 'А')
.replaceAll(' ', '')
.repeat(3);

javaScriptDescriptionIndex = Math.floor(javaScriptDescription.length/2);
let javaScriptDescriptionOneLetter = javaScriptDescription[javaScriptDescriptionIndex];

console.log(javaScriptDescriptionOneLetter);
console.log(javaScriptDescription);



