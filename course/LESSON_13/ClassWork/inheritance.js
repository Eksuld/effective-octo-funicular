// Наследоавние

class Plane {
    constructor(type, numberOfPassengers) {
        this.type = type;
        this.numberOfPassengers = numberOfPassengers;
    }

    startFlight() {
        console.log('Полетели!');
    }
}


//расширение
class MilitaryPlane extends Plane {
    constructor(type) {
        super(type, 0);
        this.numberOfGuns = 0;
    }

    startFlight() {
        console.log('Полетели в атаку!');
    }

    setNumberOfGuns(numberOfGuns) {
        this.numberOfGuns = numberOfGuns;
    }

    shoot() {
        console.log('Стреляем!');
    }
}

// const plane = new Plane('Пассажирский', 100);
// console.log(plane);
// plane.startFlight();

const militaryPlane = new MilitaryPlane('military')
// console.log('militaryPlane', militaryPlane);

militaryPlane.startFlight();
militaryPlane.setNumberOfGuns(4);
militaryPlane.shoot();
console.log('militaryPlane', militaryPlane);

console.log(militaryPlane instanceof Plane);