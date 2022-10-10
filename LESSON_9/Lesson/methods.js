//splice

const cars = ['BMW', 'Mercedes', 'Lada'];
console.log(cars);

const removedElements = cars.splice(0, 2, 'Audi', 'Bugatti');

console.log(removedElements);
console.log(cars);

//slice

const agesOfDevelopers = [25, 18, 45, 30];
// console.log(agesOfDevelopers.slice(0,2));
const sliceAgesOfDevelopers = agesOfDevelopers.slice(0,2);
console.log('sliceAgesOfDevelopers', sliceAgesOfDevelopers);
console.log(agesOfDevelopers);

//indexOf

const favoriteFood = ['Мороженое', "Торт", "Кофе"];

const indexOfFood = favoriteFood.indexOf('Кофе')
console.log('indexOfFood', indexOfFood);

//includes

const technologies = ['JavaScript', 'HTML', 'CSS'];
const isTechologyExists = technologies.includes('HTML');
console.log('isTechologyExists', isTechologyExists);

//split + join

const listOfOrders = 'Майка, шорты, кросовки, рюкзак';
const itemOfOrders = listOfOrders.split(', ')
console.log(itemOfOrders);
console.log(itemOfOrders[3]);

const joinOfOrders = itemOfOrders.join(' ');
console.log(joinOfOrders);