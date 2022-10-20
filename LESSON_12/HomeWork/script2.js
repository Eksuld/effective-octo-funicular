const dog = {
    name: 'Чарли',
    type: 'Собака',
    makeSound() {
        return 'Гав-Гав';
    }
}
const bird = {
    name: 'Петя',
    type: 'Воробей',
    makeSound() {
        return 'Чик-чирик';
    }
}


function makeDomestic(isDomestic) {
    console.log(`${this.type} по имени ${this.name} говорит ${this.makeSound()}`);
    return {
        ...this,
        isDomestic,
    }
    domestic: isDomestic
    }
    /*
    Сообщение в консоли: "Собака по имени Чарли говорит Гав-Гав"
    domesticDog = {
    name: 'Чарли',
    type: 'Собака',
    isDomestic: true,
    makeSound() {
    return 'Гав-Гав'
    }
    }
    */
   console.log(makeDomestic.bind(dog)(true));
   console.log(makeDomestic.call(dog, true));
   console.log(makeDomestic.apply(bird, [false]))