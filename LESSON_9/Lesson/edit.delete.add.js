const salariesOfDevelopers = [400, 500, 600, 2000, 350];

// Добавление элементов 
const newSeniorDeveloperSalary = 5000;
salariesOfDevelopers.push(newSeniorDeveloperSalary, 5001, 5002);
console.log(salariesOfDevelopers);

salariesOfDevelopers.unshift(100, 101, 102, 103);
console.log('salariesOfDevelopers', salariesOfDevelopers);

//Удаление элементов
const firstRemovedElement = salariesOfDevelopers.shift();
salariesOfDevelopers.shift();

// salariesOfDevelopers.pop();

const endingRemovedElement = salariesOfDevelopers.pop();

// console.log('firstRemovedElement', firstRemovedElement);
// console.log('endingRemovedElement', endingRemovedElement);
// console.log('salariesOfDevelopers', salariesOfDevelopers);

// изменение элементов

salariesOfDevelopers[4] = 6000;
console.log(salariesOfDevelopers);