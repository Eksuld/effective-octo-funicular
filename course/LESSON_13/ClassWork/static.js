class Car {
    static isCar(car) {
        return car instanceof Car;
    }

    static #intialParams = {
        name: 'Audi',
        maxSpeed: 150,
    }
    
    constructor(name, maxSpeed) {
        this.name = name || Car.#intialParams.name;
        this.maxSpeed = maxSpeed || Car.#intialParams.maxSpeed;
    }

    drive() {
        console.log(`Машина ${this.name} сейчас в пути.`);
    }
}

const car = new Car();
console.log(car);
const animal = {};
const isCar = Car.isCar(animal);
console.log(isCar);
