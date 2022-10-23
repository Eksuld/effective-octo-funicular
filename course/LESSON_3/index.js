// 1.String
const favoriteDrink = 'Coffee'
console.log(favoriteDrink);

// 2. number
const numberOfCups = 5;
console.log(numberOfCups);

// 3. boolean
const isColdDrink = false;
console.log(isColdDrink);

// 4. Null - пусто, значение неизветсно
const studentFavoriteDrink = null;
console.log(studentFavoriteDrink);

// 5. undefined - значение не было присвоено
let carOwner = undefined;
console.log(carOwner);

// 6. object
const drink = {
    favoriteDrink: 'Coffee',
    numberOfCups: 5,
    isColdDrink: true,
    // key: value, 
}
console.log(drink);

// 7. symbol - для создания уникальных ключей объекта
const id = Symbol('id');
console.log(id);

//8. bigint - большое число -(2^53 - 1)
const bigIntNumber = BigInt(10);
console.log(bigIntNumber);
