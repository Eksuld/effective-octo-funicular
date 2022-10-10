const currentDevelopers = ['Maxim', 'Oleg'];
const newDevelopers = ['Anton', 'Gleb'];

// concat

// const allDevelopers = currentDevelopers.concat(newDevelopers);
// console.log('allDevelopers', allDevelopers); 

// ...
const allDevelopers = [
    ...currentDevelopers,
    ...newDevelopers,
];
console.log(allDevelopers);