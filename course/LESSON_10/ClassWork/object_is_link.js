// 7 string, number, bigInt, boolean, undefined, null, symbol - (примитивы не ссылочный тип)
// 1 object - не примитив

const setName = (entity, value) => {
    if (typeof entity === 'object') {
        entity.name = value;
    } else {
        entity = value;
    }
}

const developer = {
    name: 'Maxim',
};
let developerName = 'Maxim';

setName(developer, 'Max');
setName(developerName, 'Max');

// console.log('developer',developer);
// console.log('developerName', developerName);

const entity = {};
const entityCopy = entity;

console.log(entity === entityCopy);

console.log({} === {});
console.log([] === []);
