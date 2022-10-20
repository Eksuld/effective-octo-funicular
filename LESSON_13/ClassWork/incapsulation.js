// Инкапсуляция

// public
// private #

class Developer {
    #salary

    constructor(name, programmingLaguage) {
        this.name = name;
        this.programmingLaguage = programmingLaguage;
        this.#salary = 3000;
    }

    get devSalary() {
        return this.#salary
    }

    set setSalary(salary) {
        this.#salary = salary;
    }

    startCoding() {
        console.log(this.#salary);
        console.log(`${this.name} начинает писать код`);
        this.#printProgrammingLanguage();
    }

    #printProgrammingLanguage() {
        console.log(`Язык программирования: ${this.programmingLaguage}`);
    }
}

class JuniorDeveloper extends Developer {
    constructor(name, programmingLaguage) {
        super(name, programmingLaguage);
    }
}

const juniorDeveloper = new JuniorDeveloper('Игорь', 'JavaScript');
// juniorDeveloper.printProgrammingLanguage();


const developer = new Developer('Максим', 'JavaScript');
// console.log(developer);
// console.log(developer.name);
// console.log(developer.programmingLaguage);
developer.startCoding();
console.log(developer.devSalary);
developer.setSalary = 5000;
console.log(developer.devSalary);
// console.log(developer.#salary);