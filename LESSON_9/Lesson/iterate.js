// const developersName = ['Maxim', 'Igor', 'Nastya', 'Irina'];
// for(let i = 0; i < developersName.length; i++) {
//     console.log('developersName', developersName[i]);
// }
// for(let item of salariesOfDevelopers) {
//     console.log(item);
// }

// developersName.forEach((name, index, array) => {
//     console.log('name', name);
//     console.log('index', index);
//     console.log('array', array);
// })

// map

// const salariesOfDevelopers = [400, 500, 600, 2000, 350];

// const updatedSalaries = salariesOfDevelopers.map((salary, index, array) => {
//     return salary ** 2;
// });

// console.log(updatedSalaries);

// //filter

// const filteredSalaries = salariesOfDevelopers.filter((salary, index, array) => {
//     return index % 2 === 0;
// })

// console.log(filteredSalaries);

// //find 

// const serchedSalary = salariesOfDevelopers.find((salary, index, array) => {
//     return salary > 400;
// })
// console.log(serchedSalary);

// // findIndex
// const searchedIndex = salariesOfDevelopers.findIndex((salary, index, array) => {
//     return salary === 600;
// })
// console.log('searchedIndex', searchedIndex);

// //some, every
// const elementExists = salariesOfDevelopers.some((salary) => {
//     return salary > 1000;
// })
// console.log(elementExists);

// const allElementExists = salariesOfDevelopers.every((salary) => {
//     return salary > 0;
// })
// console.log(allElementExists);

//reduce


const salariesOfDevelopers = [400, 500, 600, 2000, 350];

// const sum = salariesOfDevelopers.reduce((acc, item, index, arr) => {
//     console.log('acc/salary' , acc, item);
//     return acc + item;
// }, 0)

// console.log('sum', sum);

// sort
salariesOfDevelopers.sort((a, b ) => {
    return a -b;
});
console.log('salariesOfDevelopers', salariesOfDevelopers);