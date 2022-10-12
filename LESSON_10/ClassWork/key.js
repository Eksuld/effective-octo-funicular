// const user = {
//     name: 'Maxim',
//     10: '1234',
//     undefined: 'undefined',
//     [false]: false,
// }

// console.log(user);
const id = Symbol('id');

const user = {
    [id]: 4,
    name: 'Maxim',
}


console.log('user', user);
console.log(Object.keys(user));

console.log('name' in user);
console.log(id in user);