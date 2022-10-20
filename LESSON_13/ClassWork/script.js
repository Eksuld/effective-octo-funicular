// ООП

// fubction и class

// function Animal(name) {
//     this.name = name;

//     this.getName = function() {
//         return this.name
//     }
// }
class Animal {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name
    }
}


//new
const cat = new Animal('Кот');
const dog = new Animal('Собака');
console.log(dog);
// console.log('cat', cat);
// console.log(cat.name);
// console.log(cat.getName());