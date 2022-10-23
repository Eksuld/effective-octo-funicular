const mainHero = {
    fullName: 'SpiderMan',
    health: 65,
    strength: 5,
};

const badHero = {
    fullName: 'Joker',
    health: 55,
    strength: 10,
};

function printHeroInfo(extraInfo = '') {
    console.log('this', this);
    console.log(`Имя: ${this.fullName}, Здоровье: ${this.health}, Сила: ${this.strength}, ${extraInfo}`)
};


printHeroInfo.call(badHero, `Роль: Злодей`);
printHeroInfo.apply(badHero, [`Роль: Злодей`]);

const bindedPrintHero = printHeroInfo.bind(mainHero, `Роль: Главный герой`);
bindedPrintHero()